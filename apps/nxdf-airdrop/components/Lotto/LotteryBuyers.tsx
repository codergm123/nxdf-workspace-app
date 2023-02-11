import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  ref,child,get
} from "@firebase/database"
import { dbService } from "./firebase"
import LayoutProps from '../interface'

const BuyerDiv=styled.div<{isMobile:boolean}>`
  height:100%;
  width:${({isMobile}) => isMobile ? `auto` : `100%`   };
  background-color:#524880;
  display:flex;
  flex-direction:column;
  padding:50px 0 100px 0;
  color: #fff;
`
const Title=styled.h1`
  font-size:3em;
  font-weight:bold;
  font-family:'neon';
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
  text-align:center;
  margin-bottom:50px;
`
const Table=styled.table`
  border:1px solid white;
  color:white;
  margin:0 auto;
  width:90%;
  font-size:1.3rem;
  tr {
    border:1px solid white;
  }
  th {
    border:1px solid white;
    padding:20px 0;
    vertical-align:middle;
  }

`

function LotteryBuyers({isMobile}:LayoutProps) {
  const [buyers,setBuyers]=useState<any[]>([])

  useEffect(()=>{
    const dbRef=ref(dbService);
    get(child(dbRef,'drawnumber/')).then((snapshot)=>{
      if(snapshot.exists()){
        setBuyers(Object.entries(snapshot.val()))
      } else {
        console.log("No data available")
      }
    }).catch((error)=>{
    console.error(error)
  })
  },[])

  return (
    <BuyerDiv id='Buyers' isMobile={isMobile} >
      <Title>Lottery Ticket Buyers</Title>
      <Table>
        <thead>
        <tr>
          <th>WALLET ADDRESS</th>
          <th>LOTTO TICKET NUMBER</th>
          <th>DATE</th>
        </tr>
        </thead>
        <tbody>
          { buyers?.map((data,index) => {
            return(
              <tr key={index}>
                <th style={{color:'rgb(244,134,193)'}}>{data[1].walletAddress}</th>
                <th>{data[1].numbers}</th>
                <th style={{color:'pink'}}>{data[1].date}</th>
              </tr>)
            })
          }
        </tbody>
      </Table>
    </BuyerDiv>
  );
}


export default LotteryBuyers;
