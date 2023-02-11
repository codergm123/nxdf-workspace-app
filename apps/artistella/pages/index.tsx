import type { NextPage } from 'next'
import styled from 'styled-components';
import  MainLayout  from '../components/MainLayout';
import MetaContent from '../components/Home/MetaContent';
import Universe from '../components/Home/Universe';
import Layout from '../components/Layout';




const Home: NextPage = () => {
  return (
    <Layout>
      <MainLayout><h1>hello</h1></MainLayout>
       <Universe />
      <MetaContent />
    </Layout>
  );
}


export default Home
