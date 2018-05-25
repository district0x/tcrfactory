pragma solidity ^0.4.18;

import "Registry.sol";
import "proxy/Forwarder.sol";
import "RegistryToken.sol";
import "RegistryEntry.sol";

/**
 * @title Base Factory contract for creating RegistryEntry contracts
 *
 * @dev This contract is meant to be extended by other factory contracts
 */

contract RegistryEntryFactory is ApproveAndCallFallBack {
  uint public constant version = 1;

  Registry public registry;
  RegistryToken public registryToken;
  bytes32 public constant depositKey = sha3("deposit");

  function RegistryEntryFactory(Registry _registry, RegistryToken _registryToken) {
    registry = _registry;
    registryToken = _registryToken;
  }

  /**
   * @dev Creates new forwarder contract as registry entry
   * Transfers required deposit from creator into this contract
   * Approves new registry entry address to transfer deposit to itself
   * Adds new registry entry address into the registry

   */
  function createRegistryEntry(address _creator, string _title, string _description) public {
    uint deposit = registry.db().getUIntValue(depositKey);
    address regEntry = new Forwarder();
    require(registryToken.transferFrom(_creator, this, deposit));
    require(registryToken.approve(regEntry, deposit));
    registry.addRegistryEntry(regEntry);
    RegistryEntry(regEntry).construct(_creator, version, registry, registryToken, _title, _description);
  }

  /**
   * @dev Function called by MiniMeToken when somebody calls approveAndCall on it.
   * This way token can be transferred to a recipient in a single transaction together with execution
   * of additional logic

   * @param _from Sender of transaction approval
   * @param _amount Amount of approved tokens to transfer
   * @param _token Token that received the approval
   * @param _data Bytecode of a function and passed parameters, that should be called after token approval
   */
  function receiveApproval(
    address _from,
    uint256 _amount,
    address _token,
    bytes _data)
  public
  {
    require(this.call(_data));
  }
}


