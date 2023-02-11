import styled from 'styled-components';
import MainLayout from '../MainLayout';



const Unidescription = styled.div`
    margin-top:  10rem;
    display: flex;
    align-items: center;
    width: 100%;
`

const UnidesInner = styled.div`
    width: 50%;
`;


const Universe = () => {
  return (
    <MainLayout>
          <h1>Universe</h1>
          <h1>세계관</h1>
        <Unidescription>
              <UnidesInner>
                <h1>Chaos World</h1>
              </UnidesInner>
              <UnidesInner>
                  <h1>New World</h1>
              </UnidesInner>
        </Unidescription>
    </MainLayout>
  );
}


export default Universe;
