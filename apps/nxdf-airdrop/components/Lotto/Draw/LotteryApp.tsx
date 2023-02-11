import styled from "styled-components";
import LotteryBox from "./LotteryBox";

import styles from "./Lottery.module.css";
import {useConnection, useWallet, SendSPLTransaction} from "@nxdf/shared/services";
import {useEffect, useState} from "react";
import {PublicKey} from "@solana/web3.js";
import {useRouter} from "next/router";
import {child, get, set, push, ref, update} from "@firebase/database";
import {dbService} from "../firebase";
import firebase from "firebase/compat";
import database = firebase.database;
import {increment} from "firebase/database";
import router from 'next/router';
import { useIsMobile } from '../../../hooks/useIsMobile';

const Div=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:black;
  background-color:#453C70;
`
export interface LottoProps {
  userId: string;
};

const LotteryApp = (props:LottoProps) => {
  const router = useRouter();
  const isMobile = useIsMobile();
    const { connection } = useConnection();
    const { publicKey, signTransaction } = useWallet();
    const [ walletPublicKey, setWalletPublicKey] = useState<PublicKey>(null);

    const buyTicket = async (lottoNumber) => {
      const mintAddress = 'Au6EdrSDubCUc34awy9c6iQAg5GSos9pPBXyZQtyZewV'; //nxdf
      const decimals = 10**6;

      const toAddress = 'ALB4RdmYJMT2GCMCSMX3hsqhU7cVG8EQ8RSi2ztDnW57';
      const amount = 5000;

      // console.log(publicKey, walletPublicKey);
      const result = await SendSPLTransaction(connection, walletPublicKey, signTransaction, mintAddress, [toAddress], [amount], decimals);
      console.log(result);
      if(result) {
        await pushLottoNumber(walletPublicKey.toString(), lottoNumber);
        router.back();
      }
      // else {
      //   alert('Please connect your wallet');
      //  }
    };

    const pushLottoNumber = async (walletAddress, lottoNumber) => {
      const hook = window.location.search;
      const userId = hook.split('=');
      const Ref = ref(dbService,'drawnumber/');
      const today = new Date();

      await push(Ref,{
        numbers: lottoNumber.join(''),
        date: today.toUTCString(),
        userid: userId[1],
        walletAddress
      });

      const Ref2 = ref(dbService,'currentJackpot');
      await update(Ref2, {
        value: increment(5000)
      });
    };

    useEffect(()=>{
      if(!publicKey) return;
      setWalletPublicKey(publicKey);
    },[]);

    return (
        <Div>
            <h1 id={styles.title}>Lotto Draw</h1>
            <LotteryBox buyTicket={buyTicket}/>
        </Div>
    );
}

export default LotteryApp;
