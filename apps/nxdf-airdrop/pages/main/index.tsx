import { useRouter } from 'next/router';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import Flex from "../../components/Box/Flex";
import { getIsValidSolanaAddress } from '../../util/isValidSolanaAddress';
import {useWallet} from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@nxdf/shared/services";
import {useIsMobile} from "../../hooks/useIsMobile";

/* eslint-disable-next-line */
export interface MainProps {};

export const CONTAINER_WIDTH = '1100px';

export function Main(props: MainProps) {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady || !router.query.user_id) return;
    setUserId(router.query.user_id.toString());
  }, [router.isReady, router.query]);

  //const [loading, setLoading] = useState(false)
  const [referral, setReferral] = useState<string>('')
  const [retweetLink, setRetweetLink] = useState<string>('')
  const [redditLink, setRedditLink] = useState<string>('')
  const [address, setAddress] = useState('');

  const { publicKey } = useWallet();
  const isMobile = useIsMobile();
  console.log(isMobile);
  const handleSubmit = async () => {
    const isValidAddress = getIsValidSolanaAddress(address);

    if (!isValidAddress) {
      alert('Invalid wallet address');
      return;
    }

    if (userId && address) {
      const result = null; // await requestAirdrop(userId, address, referral, retweetLink, redditLink);

      if (result.status === 'success') {
        router.push('/result');
      } else {
        if (result?.exception?.type === 'already-joined') {
          console.error(result)
          alert('Already joined')
        } else {
          console.error(result)
          alert('Something wrong..')
        }
      }
    } else {
      // console.error({ userId, walletAddress, referral, retweetLink, redditLink });
      alert('Required param missed');
    }
  }

  useEffect(() => {
    if (publicKey) {
      setAddress(publicKey.toString());
    }
  }, [publicKey])

  return (
    <Wrapper isMobile={isMobile}>
      <Flex className="welcome row" mb="24px">
        <Flex flexDirection="column" width={isMobile ? '100%' : '50%'}>
          <Flex mb="16px">
            <img className="logo" src="/img/img-nxdf-logo@3x.png" alt="nxdf" />
          </Flex>
          <Flex mb="48px">
            <span className="Welcome-to-NeXters">
              <span className="Text-Style-2">Welcome to</span>
              <br />
              NeXter’s Festival
            </span>
          </Flex>
          <Flex mb="40px" className="desc">
            Share your NXDF coins with your friends.
            <br /> If you type your friends email, or copy this event link and spread to your twitter, reddit, youtube,
            facebook, you get double NXDF bonus!
          </Flex>
          <Flex style={{ gap: '20px' }}>
            <a href="https://www.reddit.com/r/next_defi_protocol/" target="_blank" rel="noreferrer">
              <img className="social" src="/img/icon-reddit@3x.png" alt="reddit" />
            </a>
            <a href="https://twitter.com/NXDF16" target="_blank" rel="noreferrer">
              <img className="social" src="/img/icon-twitter@3x.png" alt="twitter" />
            </a>
            <a href="https://t.me/nxdfprotocol" target="_blank" rel="noreferrer">
              <img className="social" src="/img/icon-telegram@3x.png" alt="facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCMdPUPpCTVf-OHvMLCdzxOQ" target="_blank" rel="noreferrer">
              <img className="social" src="/img/icon-youtube@3x.png" alt="youtube" />
            </a>
          </Flex>
        </Flex>
        {!isMobile && (
          <Flex width="50%" justifyContent="center">
            <img className="mockup" src="/img/img-mockup@3x.png" alt="mobile" />
          </Flex>
        )}
      </Flex>
      <Flex className="check-youtube" alignItems="center" flexDirection="column">
        <Flex className="background" alignItems="center" flexDirection="column">
          <div className="you-dont">You don’t have a NXDF wallet?</div>
          <div className="dont-worry">Don’t worry follow this video!</div>
          <button>
            <a href="https://youtu.be/ylq1ozwtrdw" target="_blank" rel="noreferrer">
              Check Youtube Video
            </a>
          </button>
        </Flex>
      </Flex>
      <Flex className="submit row" pt="80px">
        {!isMobile && (
          <Flex width="50%" justifyContent="center">
            <img className="img-address-input" src="/img/img-adress-input@3x.png" alt="mobile" />
          </Flex>
        )}
        <Flex width={isMobile ? '100%' : '50%'} justifyContent="center" flexDirection="column">
          <Flex flexDirection="column" mb="10px">
            <Flex flexDirection="column">
              <div className="label">Enter your NXDF wallet address</div>
              {isMobile ? (
                <input type="text" value={address ?? ''} onChange={(e) => setAddress(e.target.value)} />
              ) : (
                <WalletMultiButton className="btn btn-ghost" />
              )}
            </Flex>
          </Flex>
          <Flex>
            <Flex flexDirection="column" width={isMobile ? '100%' : 'inherit'}>
              <div className="label">Enter your friend’s email address</div>
              <Flex>
                <input type="text" value={referral} onChange={(e) => setReferral(e.target.value)} />
                <div className="badge">
                  <span className="K-More-Bonus">
                    <span className="text-style-1">MAX 5K</span>
                    <span>More Bonus!</span>
                  </span>
                </div>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex flexDirection="column" width={isMobile ? '100%' : 'inherit'}>
              <div className="label">Retweet NXDF's tweet to your followers then, enter your retweet link</div>
              <Flex>
                <input type="text" className="full" value={retweetLink} onChange={(e) => setRetweetLink(e.target.value)} />
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex flexDirection="column" width={isMobile ? '100%' : 'inherit'}>
              <div className="label">Upvote, leave your comment on our reddit then, enter your reddit comment link</div>
              <Flex>
                <input type="text" className="full" value={redditLink} onChange={(e) => setRedditLink(e.target.value)} />
              </Flex>
            </Flex>
          </Flex>
          <Flex mt="42px" justifyContent={isMobile ? 'center' : 'initial'}>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default Main;

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  background-color: #151f42;
  flex-direction: column;
  align-items: center;

  padding: 74px 0px;
  width: 100%;

  h1 {
    margin-bottom: 24px;
  }

  .connect-button {
    display: flex;
    align-items: center;
    width: 223px;
    padding: 14px 20px 12px;
    border-radius: 12px;
    border: solid 1px #fff;
    background-color: rgba(255, 255, 255, 0.05);
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    color: #fff;

    img {
      margin-right: 5px;
    }
  }

  .row {
    width: ${({ isMobile }) => (isMobile ? '100%' : CONTAINER_WIDTH)};
    ${({ isMobile }) =>
  isMobile &&
  `
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  .welcome {
    .Welcome-to-NeXters {
      width: 540px;
      margin: 16px 41px 22px 0;
      font-family: GmarketSans;
      font-size: 56px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      color: #ff3ba2;
    }

    .Welcome-to-NeXters .Text-Style-2 {
      color: #fff;
    }
    .desc {
      //font-family: Roboto;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.78;
      letter-spacing: normal;
      color: #eae9f8;
    }

    .logo {
      width: 237px;
    }

    .mockup {
      width: 442px;
    }

    .social {
      width: 50px;
    }
  }
  .check-youtube {
    height: 206px;
    background-color: #192a68;
    width: 100%;
    padding-top: 26px;

    .background {
      max-width: 903px;
      width: 100%;
      background-image: url('/img/img-middle-banner-rec@3x.png');
      background-size: 903px 188px;
      background-repeat: no-repeat;
      color: #fff;
      font-family: inherit;
    }

    .you-dont {
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.78;
      letter-spacing: normal;
      text-align: center;
    }
    .dont-worry {
      font-size: 24px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: center;
      margin-bottom: 24px;
    }

    button {
      padding: 14px 35.5px 14px 36.5px;
      border-radius: 30px;
      background-image: linear-gradient(104deg, #799cff 5%, #ed2179 96%);
      font-size: 20px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
  }

  .submit {
    .img-address-input {
      width: 330px;
    }

    .label {
      height: 32px;
      //font-family: Roboto;
      font-size: 15px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.13;
      letter-spacing: normal;
      color: #eae9f8;
    }

    input {
      width: ${({ isMobile }) => (isMobile ? '80%' : '470px')};
      height: 52px;
      border-radius: 12px;
      background-color: #233470;
      padding: 0 10px;
      color: white;
      font-size: 18px;
    }

    input.full {
      width: ${({isMobile}) => (isMobile ? '100%' : '585px')};
    }

    .submit-button {
      padding: 14px 106px;
      border-radius: 30px;
      background-image: linear-gradient(103deg, #799cff 5%, #ed2179 96%);
      line-height: 1.33;
      letter-spacing: normal;
      text-align: center;
      font-size: 24px;
      color: #fff;
    }

    .badge {
      margin-left: 10px;
      width: 104px;
      height: 52px;
      padding: 12px 15px;
      object-fit: contain;
      background-image: url('/img/img-gold-button@3x.png');

      background-size: 104px 52px;
      background-repeat: no-repeat;

      .K-More-Bonus {
        display: flex;
        flex-direction: column;
        width: 74px;
        height: 28px;
        font-family: Roboto;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.08;
        letter-spacing: normal;
        text-align: center;
        color: #151f42;
      }

      .K-More-Bonus .text-style-1 {
        font-size: 15px;
        font-weight: 900;
      }
    }
  }
`;
