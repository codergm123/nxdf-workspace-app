import Image from 'next/image';
import styled from 'styled-components';
import Img1 from "../../public/images/1.png";
import Img2 from "../../public/images/2.png";
import Img3 from "../../public/images/3.png";
import Img4 from "../../public/images/4.png";
import MainLayout from '../MainLayout';

const LandDesDiv = styled.div`
  display: flex;
  background-color: white ;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  color: black;
  flex-direction: column;
  text-align: center;
`;


const LandDesInnerDiv = styled.div`
  display: flex;
  background-color: white ;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  color: black;
`;


const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width : 33%;
  height : 60%;
  border-radius: 50%;
  border: 1px solid orange;
`;

const LineDiv = styled.div`
  width : 33%;
  height : 33%;
`;

const About2 = () => {
  return (
    <MainLayout justifyContent="center" alignItems="center" >
      <LandDesDiv>
        <div>
          <h1>Artisland</h1>
          <h1>아티스랜드 간략 설명</h1>
        </div>
        <LandDesInnerDiv>
          <ContentDiv>
            <h1>village</h1>
            <h1>빌리지 간략설명</h1>
          </ContentDiv>
          <LineDiv />
          <ContentDiv>
            <h1>central land</h1>
            <h1>센트럴 랜드 간략 설명</h1>
          </ContentDiv>
        </LandDesInnerDiv>
      </LandDesDiv>  
    </MainLayout>
  );
}


export default About2;
