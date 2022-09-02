import React from 'react'

import {Product, FooterBanner, Banner, Footer} from '../components'
import {client} from '../lib/client'

const Home = ({ productsData, bannerData}) => {
  return (
    <>
      <Banner banner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      {console.log(productsData)}
      <div className='products-heading'>
        <h2>Productos más vendidos</h2>
        <p>De distinto tipo</p>
      </div>

      <div className='products-container'>
        {productsData?.map((product) => product.name)}
      </div>

      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const productsData = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productsData, bannerData }
  }
}

export default Home