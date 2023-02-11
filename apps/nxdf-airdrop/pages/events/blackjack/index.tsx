import { useRouter } from 'next/router';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import {useWallet} from "@solana/wallet-adapter-react";
import {useConnection, WalletMultiButton} from "@nxdf/shared/services";
import {useIsMobile} from "../../../hooks/useIsMobile";
import BlackJack from "../../../components/Blackjack/Blackjack";
import BlackJackPage from "../../../components/Blackjack/BlackjackPage";

/* eslint-disable-next-line */
export interface BlackjackProps {};

export const CONTAINER_WIDTH = '1100px';

export function Blackjack(props: BlackjackProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { publicKey } = useWallet();

  const [userId, setUserId] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if(!router.isReady || !router.query.user_id) return;
    setUserId(router.query.user_id.toString());
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (publicKey) {
      setAddress(publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div>
      <BlackJack/>
      {/*<BlackJackPage/>*/}
    </div>
  )
}

export default Blackjack;
