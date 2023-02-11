import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import Main from "../../../components/Lotto/Main";
import Header from "../../../components/Lotto/Header";
import LotteryBuyers from "../../../components/Lotto/LotteryBuyers";
import About from "../../../components/Lotto/About";
import Winners from "../../../components/Lotto/Winners";
import Footer from "../../../components/Lotto/Footer";
import Head from "next/head";
import styled from 'styled-components';
import { useIsMobile } from '../../../hooks/useIsMobile';

/* eslint-disable-next-line */
export interface LottoProps {};

export const CONTAINER_WIDTH = '1100px';

export function Lotto(props: LottoProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [userId, setUserId] = useState('');
  const WIDTH = window.innerWidth;
  useEffect(() => {
    if(!router.isReady || !router.query.user_id) return;
    setUserId(router.query.user_id.toString());
  }, [router.isReady, router.query]);
  
  
  const IndexDiv = styled.div<{ isMobile: boolean }>`
    width: ${({isMobile}) => isMobile ? `${WIDTH*2}px` : `100%`   };
  `;


  return (
    <IndexDiv isMobile={isMobile}>
      <Head>
        <title>Welcome to NXDF Lotto!</title>
      </Head>
      <Header isMobile={isMobile} />
      <Main userId={userId} isMobile={isMobile}/>
      <LotteryBuyers  isMobile={isMobile} />
      <About  isMobile={isMobile} />
      <Winners  isMobile={isMobile} />
      <Footer  isMobile={isMobile} />
    </IndexDiv>
  )
}

export default Lotto;
