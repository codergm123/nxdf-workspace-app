import styled, { css } from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
}


export const MLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0.5rem;
`


const ContentLayout = styled.div`
    width: 70vw;
    height: 70vh;
    background-color:#7f8fa6;
    display: flex ;
    flex-direction: column;
    justify-content: ${props => (props.justifyContent ? props.justifyContent : "flex-start")};
    align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
`;

const MainLayout = ({children,justifyContent,alignItems}:MainLayoutProps) => {
  return (
    <MLayout >
      <ContentLayout justifyContent={justifyContent} alignItems={alignItems}>
       {children}
      </ContentLayout>
    </MLayout>
  );
}


export default MainLayout


