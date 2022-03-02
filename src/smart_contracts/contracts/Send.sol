// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Send {

    function sendAmount(address payable _receiver) public payable {
        _receiver.transfer(msg.value);
    } 
}