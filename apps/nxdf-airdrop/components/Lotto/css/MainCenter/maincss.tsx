import styled from 'styled-components'


export const PotContainer = styled.div`
  font-weight:bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-height: 1280px){
    margin-top: 2rem;
  }

`
export const PotSolContainer=styled.div`
  font-size:65px;
  color:white;
`
export const PotUsdContainer=styled.div`
  font-size:65px;
  margin-bottom:60px;
  color:white;
 
`
export const CurrentJackpot=styled.h1`
  font-size:8em;
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  font-weight: 500;
  text-align: center;
  font-family: 'neoneon';
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
  margin-bottom: 30px;
   @media(max-height: 1280px){
    :last-of-type{
    margin-bottom: 0px;
  }
  }
  font-family:'neon';
`
export const GetTicket = styled.button<{isMobile:boolean}>`
  width:80%;
  min-width:250px;
  height:${({isMobile})=> isMobile ? "150px" : "200px"};
  border-radius:2px;
  background-color:#C5BAFA;
  font-size:20px;
  font-weight:bold;
  color:#DC348C;
  border-width:0px 0px 8px;
  border-bottom-style:solid;
  border-bottom-color:#B75BB7;
  z-index: 10;
`
export const BuyMultipleTicket=styled.button`
  width:10%;
  min-width:200px;
  margin:0 auto;
  height:60px;
  background:#C5BAFA;
  color:#DC348C;
  font-size:18px;
  font-weight:800;
  margin-top:30px;
  border-bottom:8px solid #B75BB7;
  border-radius:2px;
`
export const SlideDiv=styled.div`
  display:flex;
  align-items:center;
  width:100px;
  justify-content:center;

`
export const SlideInput=styled.input`
  z-index:1;
  height:10px;
  width:10rem;
  border-radius:5px;
  outline:none;
  background-color:transparent;
`
//타이머
export const TimerContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom:10px;
  z-index: 10;
`
export const TimerBox = styled.div`
  width : 100%;
  height : 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-bottom: 40%;
  color : white;
  span{
    font-weight: bold;
    font-size: 1.5rem;
    :first-child{
      font-size: 3rem;
      margin-bottom: 3px;
    }
  }

`

export const GetTicketContainer = styled.div<{isMobile:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: ${(props) => props.isMobile ? `100%` : "40%"};
  height: ${(props) => props.isMobile ? `20%` : "auto"};
  margin-bottom:50px;
  position: relative;
  background-color: #352F58;
  border-radius:6px;
  min-width:400px;
  @media(min-height:768px) {
    width: ${(props) => props.isMobile ? `100%` : "40%"};
    height: ${(props) => props.isMobile ? `15%` : "30%"};
  }
`

export const BackgroundDiv = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:20px 0;
  
`

export const BtnDiv = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
`