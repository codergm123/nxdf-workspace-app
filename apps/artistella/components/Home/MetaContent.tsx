import Image from 'next/image';
import styled from 'styled-components';
import Img1 from "../../public/images/1.png";
import Img2 from "../../public/images/2.png";
import Img3 from "../../public/images/3.png";
import Img4 from "../../public/images/4.png";
import  MainLayout  from '../MainLayout';




const MetaContentDes = styled.div`
    width: 100%;
    height: 60%;
    margin-top:  10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MetaInnerDes = styled.div`
    width: 20%;
    margin: 0 1vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MetaImage = styled(Image)`
    width: 80%;
    height: 100%;
    border-radius: 50% ;
    object-fit: cover;
    margin-bottom: 5px;
`

const MetaDes = styled.h1`
    margin-top: 10px;
    font-size: 1.5rem;
`


const MetaContent = () => {
  return (
    <MainLayout>
          <h1>Universe</h1>
          <h1>세계관</h1>
          <p>설명 </p>
          <p>설명</p>
        <MetaContentDes>
              <MetaInnerDes>
                  <MetaImage alt="image1" src={Img1} width={300} height={300}  />
                <MetaDes>Healing</MetaDes>
              </MetaInnerDes>
              <MetaInnerDes>
                <MetaImage alt="image2" src={Img2} width={300} height={300}  />
                <MetaDes>Game</MetaDes>
              </MetaInnerDes>
              <MetaInnerDes>
                <MetaImage alt="image3" src={Img3} width={300} height={300} />
                <MetaDes>Community</MetaDes>
              </MetaInnerDes>
              <MetaInnerDes>
                <MetaImage alt="image4" src={Img4} width={300} height={300} />
                <MetaDes>Art</MetaDes>
              </MetaInnerDes>
        </MetaContentDes>
   </MainLayout>   
  );
}


export default MetaContent;
