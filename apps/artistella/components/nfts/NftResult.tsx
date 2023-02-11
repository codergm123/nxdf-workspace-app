import Image from 'next/image';
import styled from 'styled-components';
import Img1 from "../../public/images/1.png";



const ResultLay = styled.div`
    background-color: #141722 ;
    border: 3px solid black ;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px ;
    margin: 20px 10px;
`;


const ResultImg = styled.div`
    width: 90%;
    height: 80%;
    background-color: #49547B;
`;


const ResultDes = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ResultData = styled.div`
    align-self: flex-start;
    margin-left : 5%;
    display: flex;
    flex-direction: column;
`;


const BuyBtn = styled.div`
    margin-top: 5%;
    padding: 10px ;
    height: 10%;
    width: 100%;
    background-color: #F78F1E ;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NftResult = () => {
  return (
    <ResultLay key="">
        <ResultDes>
            <ResultImg></ResultImg>
            <ResultData>
                <span>land</span>
                <span>#123123</span>
                <div>
                    <span>value</span>
                    <span>grade</span>
                </div>
            </ResultData>
        </ResultDes>
        <BuyBtn>
            <div>
                <Image alt={"coin"} src={Img1} width={25} height={25}/>
                <span>123123</span>    
            </div>       
            <div><span>Buy</span></div>       
        </BuyBtn>
    </ResultLay>
  );
}


export default NftResult;
