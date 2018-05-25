pragma solidity ^0.4.18;

import "auth/DSAuth.sol";
import "db/EternalDb.sol";
import "proxy/Forwarder.sol";
import "proxy/MutableForwarder.sol";
import "Registry.sol";
import "RegistryEntryFactory.sol";
import "token/minime/MiniMeToken.sol";
import "RegistryToken.sol";

contract RegistryFactory is DSAuth {
  address public registryTarget;
  mapping(address => bool) public isRegistry;

  event RegistryCreated(address registry, address db, address registryToken, address registryEntryFactory, address creator, uint challengePeriodDuration, uint commitPeriodDuration, uint revealPeriodDuration, uint deposit, uint timestamp);
  event RegistryCreated2(address registry, string title, string description, string tokenName, string tokenSymbol, uint tokenTotalSupply);
  event RegistryEntryEvent(address indexed registry, address indexed registryEntry, bytes32 indexed eventType, uint version, uint timestamp, uint[] data);

  bytes32 public constant challengePeriodDurationKey = sha3("challengePeriodDuration");
  bytes32 public constant commitPeriodDurationKey = sha3("commitPeriodDuration");
  bytes32 public constant revealPeriodDurationKey = sha3("revealPeriodDuration");
  bytes32 public constant depositKey = sha3("deposit");

  modifier onlyRegistry() {
    require(isRegistry[msg.sender]);
    _;
  }

  function RegistryFactory(address _registryTarget) {
    registryTarget = _registryTarget;
  }

  function createRegistry(
    string _title,
    string _description,
    string _tokenName,
    string _tokenSymbol,
    uint _totalSupply,
    address _tokenFactory,
    uint _challengePeriodDuration,
    uint _commitPeriodDuration,
    uint _revealPeriodDuration,
    uint _deposit
  )
  public
  {
    EternalDb db = new EternalDb();
    db.setUIntValue(challengePeriodDurationKey, _challengePeriodDuration);
    db.setUIntValue(commitPeriodDurationKey, _commitPeriodDuration);
    db.setUIntValue(revealPeriodDurationKey, _revealPeriodDuration);
    db.setUIntValue(depositKey, _deposit);
    address registry = new MutableForwarder();
    RegistryToken registryToken = new RegistryToken(msg.sender, _tokenName, _tokenSymbol, _tokenFactory, _totalSupply);
    RegistryEntryFactory registryEntryFactory = new RegistryEntryFactory(Registry(registry), registryToken);
    isRegistry[registry] = true;
    db.setOwner(registry);
    MutableForwarder(registry).setTarget(registryTarget);
    Registry(registry).construct(db);
    Registry(registry).setFactory(registryEntryFactory, true);
    Registry(registry).setOwner(owner);
    RegistryCreated(registry, db, registryToken, registryEntryFactory, msg.sender, _challengePeriodDuration, _commitPeriodDuration, _revealPeriodDuration, _deposit, now);
    RegistryCreated2(registry, _title, _description, _tokenName, _tokenSymbol, _totalSupply);
  }

  function fireRegistryEntryEvent(address _registryEntry, bytes32 _eventType, uint _version, uint[] _data)
  onlyRegistry
  {
    RegistryEntryEvent(msg.sender, _registryEntry, _eventType, _version, now, _data);
  }

  function setRegistryTarget(address _registryTarget) public auth {
    registryTarget = _registryTarget;
  }
}

