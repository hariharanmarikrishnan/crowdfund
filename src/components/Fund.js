import React, { useState } from 'react';
import Web3 from 'web3';
import "./Fund.css";


export default function Fund() {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    let web3;
    web3 = new Web3(window.ethereum);
    const cAddress = "0x47a21Fe51c3A0611912ffc8c87B00117F2948c61";
    const abi = [
        {
            "inputs": [],
            "name": "fund",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const login = async () => {
        if (window.ethereum) {
            await window.ethereum.enable();
            web3 = new Web3(window.ethereum);
            console.log("metamask connected");
            web3.eth.getAccounts().then((res) => {
                setAccount(res[0]);
            })



        } else {
            web3 = new Web3("Http://127.0.0.1:7545");
            console.log("ganache connected");
        }
        return web3;
    };
    function fund1() {
        var e = document.getElementById("fund").value;
        fund(e);

    }
    const fund = (e) => {
        const contract = new web3.eth.Contract(abi, cAddress);
        contract.methods.fund().send({ from: account, value: e }).then((res) => {
            console.log(res);

        });


    }
    const balanceOf = () => {
        const contract = new web3.eth.Contract(abi, cAddress);
        contract.methods.balanceOf().call().then((res) => {
            console.log(res);
            setBalance(res);

        })
    }
    const withdraw = () => {
        const contract = new web3.eth.Contract(abi, cAddress);
        contract.methods.withdraw().send({ from: account }).then((res) => {
            console.log(res);
        })
    }


    return (
        <>
            <div className='main'>
                <div className='box1'>
                    <button onClick={login} id="login">
                        connect
                    </button>
                    <h1>
                        account:{account}
                    </h1>
                    <input type="number" id="fund" placeholder='Value in wei'></input><br></br>

                    <button onClick={fund1} id="fund1">
                        fund
                    </button>

                </div>

                <div className='box2'>
                    <h1>withdraw</h1>
                    <button onClick={balanceOf} id="bal">balance</button>
                    <h2 id="balance">balance:{balance} wei</h2>
                    <button onClick={withdraw} id="withdraw">withdraw</button>

                </div>
            </div>
        </>
    );

}