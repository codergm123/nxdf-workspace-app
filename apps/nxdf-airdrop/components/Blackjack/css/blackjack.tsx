import styled from "styled-components";


//블랙잭 Wrapper


export const BlackjackWrapper = styled.div`
    width : 80%;
    height: 100vh;
    margin: 0px auto;
`;


//블랙잭 헤더
export const BlackjackHead = styled.nav`
    position: fixed;
    top: 0;
    width : 80%;
    height : 25vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Logo = styled.div`
    width : 20%;
    height : 100%;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("/img/icon-nxdf.png");
`

export const Balance = styled.div`
    width : 20%;
    height : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BalnceButton = styled.button`
    width : 70%;
    height: 40%;
    background-color:#B75CB6 ;
    border-radius: 15px;
    color: #5F305D;
    font-size: 40px;
    font-weight: 900;
`;

//블랙잭 테이블


export const PlayTableDiv = styled.div`
    width : 100%;
    height: 70vh;
    background-color: #3A0156;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #3A0156;
`;

export const TextTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-size: 40px;
        color :#DC338D
    }
`;

export const CardTable = styled.div`
    width : 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    margin: 15px;
    width : 9%;
    height : 20vh;
    border-radius: 15px;
    border: 5px solid #B75CB6 ;
`;



//블랙잭 플레이어 


export const PlayerDiv = styled.div`
    width : 100%;
    height: 30vh;
    background-color: #220830;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`;
export const Betbutton = styled.button`
    width : 10%;
    height: 13vh;
    background-color: #3A0156;
    border-radius: 20px;
    color : #DC338D;
    font-size: 40px;
    font-weight: bolder;
`;
export const Hit = styled.button`
    width : 15%;
    height: 18vh;
    border-radius: 20px;
    background-color: #3A0156;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        font-size: 40px;
        font-weight: bolder;
        color: #DC338D ;
    }
`;



export const CardImgWrapper = styled.div`
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    img{
        width: 30%;
        :first-child{
            width: 15%;
            z-index: 1;
        }
        :nth-child(2){
            transform: translateX(-2vh);
        }
    }
`;