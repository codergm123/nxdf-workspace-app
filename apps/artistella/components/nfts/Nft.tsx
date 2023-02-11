import Image from 'next/image';
import styled from 'styled-components';
import Img1 from "../../public/images/1.png";
import Img2 from "../../public/images/2.png";
import Img3 from "../../public/images/3.png";
import Img4 from "../../public/images/4.png";
import MainLayout from '../MainLayout';
import NftResult from './NftResult';

const NftDiv = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;

const TitleDiv = styled.div`
        width: 100%;
        height: 10%;
        background-color: #7f8fa6;
        font-size: 3rem;
`;





const ResultDiv = styled.div`
        width: 100%;
        height: 70% ;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(400px,400px);
`

const SettingLay = styled.div`
        width: 100%;
        height: 20%;
        background-color: #6f7fa5; ;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

`;

const SettingInnerLay = styled.div`
    width: 80%;
    height: 40% ;
    margin: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`; 

const SettingInput = styled.div`
    width: 20%;
    height: 80%;
    background-color: grey;
    margin: 20px 20px 20px 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CoinName = styled.span`
    width: 80%;
    text-align: right;
    margin-right: 10px;
`;


const SettingSmallInput = styled.div`
    width: 15%;
    height: 80%;
    background-color: grey;
    margin: 10px;
    border: 1px solid black;
`;

const PriceInput = styled.input`
    width: 100%;
    height: 100%;
    text-align: right ;
    background-color: grey;
    font-size: 1.5rem; ;
`;

const Select = styled.select`
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    background-color: grey;
    color: white;
`;

const Nft = () => {
    return (
      <MainLayout>
        <NftDiv>
            <TitleDiv>
                <h1>nfts</h1>
            </TitleDiv>          
                <SettingLay>
                    <SettingInnerLay>
                        <SettingInput>
                            <Image src={Img1} width={25} height={25} />
                            <CoinName>Solana</CoinName>
                            <Image src={Img2} width={25} height={25} />
                        </SettingInput>
                        <SettingInput>
                            <PriceInput type="text" name="min" placeholder="Min price" />
                        </SettingInput>
                        <SettingInput>
                            <PriceInput type="text" name="max"  placeholder="Max price" />
                        </SettingInput>
                    </SettingInnerLay>
                    <SettingInnerLay>
                        <SettingSmallInput>
                            <Select name="category" defaultValue={""} >
                                <option value="">Category</option>
                                <option value="land">Land</option>
                                <option value="site">Site</option>
                                <option value="building">Building</option>
                            </Select>
                        </SettingSmallInput>
                        <SettingSmallInput>
                            <Select name="value" defaultValue={""} >
                                <option value="">Value all</option>
                                <option value="SS">SS</option>
                                <option value="S">S</option>
                                <option value="A">A</option>
                            </Select>
                        </SettingSmallInput>
                        <SettingSmallInput>
                            <Select name="grade" defaultValue={""} >
                                <option value="">Grade All</option>
                                <option value="ss">SS</option>
                                <option value="s">S</option>
                                <option value="a">A</option>
                            </Select>
                        </SettingSmallInput>
                        <SettingSmallInput>
                            <Select name="price" defaultValue={"des"} >
                                <option value="des">Low to High</option>
                                <option value="cre">High to Low</option>
                            </Select>
                        </SettingSmallInput>
                    </SettingInnerLay>
                </SettingLay>
            <div>
                <h1>Result</h1>
            </div>
            <ResultDiv>
                {
                    [1, 2,1, 2,].map((data,i) => < NftResult key={i}  />)   
                }
            </ResultDiv>
        </NftDiv>
    </MainLayout>
  );
}


export default Nft;
