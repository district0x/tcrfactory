pragma solidity ^0.4.18;

import "./token/minime/MiniMeToken.sol";

/**
 * @title Token used for curation of MemeFactory TCR
 *
 * @dev Standard MiniMe Token with pre-minted supply and with dead controller.
 */

contract RegistryToken is MiniMeToken {
  function RegistryToken(address _owner, string _tokenName, string _tokenSymbol, address _tokenFactory, uint _mintedAmount)
  MiniMeToken(
    _tokenFactory,
    0x0,
    0,
    _tokenName,
    18,
    _tokenSymbol,
    true
  )
  {
    generateTokens(_owner, _mintedAmount);
    changeController(0x0);
  }

  function batchTransfer(address[] _to, uint _amount) public {
    for (uint i = 0; i < _to.length; i++) {
      transfer(_to[i], _amount);
    }
  }
}