import  MainLayout  from '../../components/MainLayout';
import Layout from '../../components/Layout';
import type { NextPage } from 'next'
import About1 from '../../components/About/About';
import About2 from '../../components/About/About2';
import About3 from '../../components/About/About3';
import About4 from '../../components/About/About4';
import About5 from '../../components/About/About5';


const About: NextPage = () => {
  return (
    <Layout>
        <About1 />
        <About2 />
        <About3 />
        <About4 />
        <About5 />
         
    </Layout>
  );
}


export default About
