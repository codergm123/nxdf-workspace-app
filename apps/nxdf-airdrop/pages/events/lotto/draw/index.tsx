import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import LotteryApp from "../../../../components/Lotto/Draw/LotteryApp";

/* eslint-disable-next-line */
export interface LottoDrawProps {}

export const CONTAINER_WIDTH = '1100px';

export function LottoDraw(props: LottoDrawProps) {
  const router = useRouter();

  const [userId, setUserId] = useState('');

  useEffect(() => {
    if(!router.isReady || !router.query.user_id) return;
    setUserId(router.query.user_id.toString());
  }, [router.isReady, router.query]);

  return (
    <div>
      <LotteryApp userId={userId}/>
    </div>
  )
}

export default LottoDraw;
