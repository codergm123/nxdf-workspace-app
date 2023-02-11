import styled from 'styled-components';
import Link from 'next/link';


function BlackJackPage() {

    return (
        <BlackPageWrapper>
            <BlackPage>
                <PageHeader>
                    <Logo><LogoImg src="/img/icon-nxdf.png" /></Logo>
                    <Title>
                        <span>NXDF</span>
                        <span>BLACKJACK</span>
                    </Title>
                    <Nav>
                        <li>HOME</li>
                        <li>GITHUB</li>
                        <li>ABOUT</li>
                    </Nav>
                </PageHeader>
                <Dealers>
                </Dealers>
                <PlayButtonDiv>
                    <PlayButton href="/events/blackjack/play">
                         <span>PLAY</span>
                    </PlayButton>
                </PlayButtonDiv>
            </BlackPage>
        </BlackPageWrapper>
    );
}

export default BlackJackPage;

const BlackPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #3B0157;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BlackPage = styled.div`
    width: 80%;
    height: 100vh;
`;

const PageHeader = styled.nav`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
`


const Logo = styled.div`
    margin-top: 10vh;
    width: 20%;
    height: 100%;
`;

const LogoImg = styled.img`
    width: 70%;
    height: 100%;
`;


const Title = styled(Logo)`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        color:#F486C0;
        font-weight: 500;
        font-family: "Neoneon";
        font-size: 10vh;
        text-shadow: 0 0 0 #F486C0, 0 0 0px #F486C0, 0 0 0px #F486C0, 0 0 10px #e6469b,
        0 0 0px #C5BAFA, 0 0 8px #C5BAFA, 0 0 0px #C5BAFA, 0 0 10px #C5BAFA;
        margin: 10px 0px;
    }
`;

const Nav = styled(Logo)`
    list-style:none;
    color : white;
    display: flex;
    justify-content: space-between;
    font-size: 3vh;
    font-weight : 400;

`

const Dealers = styled.div`
    margin-top: 10vh;
    width: 100%;
    height: 50%;
    background-image : url('/img/img-playgame.svg'), url('/img/img-dealer.png'), url('/img/img-cards.png');
    background-position : left, center, right;
    background-repeat : no-repeat;
    background-size: 25%, 32%, 25%;

`
const PlayButtonDiv = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PlayButton = styled(Link)`
    width: 15%;
    height : 40%;
    background-color: #C5BAF9 ;
    border-bottom: 5px solid #E7429A;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        text-align: center;
        font-family: "Neoneon";
        font-size: 5vh;
        color: #E7429A;
        text-shadow: 0 0 0 #F486C0, 0 0 0px #F486C0, 0 0 0px #F486C0, 0 0 10px #e6469b,
            0 0 0px #C5BAFA, 0 0 8px #C5BAFA, 0 0 0px #C5BAFA, 0 0 10px #C5BAFA;
        font-weight : bolder;
    }
`;
