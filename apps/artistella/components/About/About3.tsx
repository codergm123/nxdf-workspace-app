import Image from 'next/image';
import styled from 'styled-components';
import Img1 from "../../public/images/1.png";
import Img2 from "../../public/images/2.png";
import Img3 from "../../public/images/3.png";
import Img4 from "../../public/images/4.png";
import MainLayout from '../MainLayout';


const VillageDiv = styled.div`

`

const About3 = () => {
  return (
    <MainLayout>
      <VillageDiv><h1>village</h1></VillageDiv>  
    </MainLayout>
  );
}


export default About3;
