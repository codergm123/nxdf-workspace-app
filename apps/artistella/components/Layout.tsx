import type { NextPage } from 'next'
import styled from 'styled-components';
import Header from '../components/Header'
interface LayoutProps {
  children: React.ReactNode;
}


const Main = styled.div`
    margin-top: 90px ;
    width: 100%;
    height: 100%;

`

const Lay = styled.div`
    width: 100%;
    height: 100%;
    background-color: #141722;
`

const Layout = ({children}:LayoutProps) => {
  return (
    <Lay >
      <Header />
      <Main>
       {children}
      </Main>
    </Lay>
  );
}


export default Layout
