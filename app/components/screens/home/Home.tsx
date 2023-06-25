import React from 'react';
import Layout from '../../layout/Layout';
import Map from './Map';

const Home = () => {
  return (
    <Layout title={'Taxi App'}>
      <div>
        <Map />
      </div>
    </Layout>
  )
}

export default Home;
