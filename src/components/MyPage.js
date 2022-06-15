import React from "react";
import { useState } from "react";
import Header from "./Header";
import Web3 from "web3";
import "./MyPage.css";
import Pic from "./Pic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const MyPage = () => {

  const [pics, setPics] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

  const list = pics.map((el) => <Pic picture={el} />);

  const [account, setAccount] = useState('');
  
  const initWeb3 = async () =>{
    if(window.ethereum){ //메타마스크 최신버전이 있다면
      const web3 = new Web3(window.ethereum);
      try{
        const account = await web3.eth.getAccounts();
        setAccount(account);
      } catch (error){
        console.log(error);
      }
    }
  }
  // const accounts = ethereum.

  
        
  return (
    <div className="container">
      <Header />
      <div className="user">
        <h1>
          <FontAwesomeIcon icon={faCircleUser} className="logo" size="4x" />
        </h1>
      </div>
      <div className="name">
        <h2>Unnamed</h2>
      </div>
      <div className="account">
          <h4><FontAwesomeIcon icon={faEthereum} className="logo"  size="2x"/>
          {account}
          {account === '' ? <button onClick={() => initWeb3()}>계정보기</button> : <button onClick={() => navigator.clipboard.writeText(account)}>계정 복사</button>}</h4>
      </div>
      <div className="tap">
        <h3>Colleted</h3>
      </div>
      
      <div className="pics">{list}</div>

    </div>
  );
};

export default MyPage;
