import React from 'react'

import {Product, Banner, Footer, FooterBanner} from '../components'
import {client} from '../lib/client'
import banner from '../Sanity_e-commerce/schemas/banner'

const Home = ({ productsData, bannerData}) => {
  return (
    <>
      <Banner banner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Productos más vendidos</h2>
        <p>De distinto tipo</p>
      </div>

      <div className='products-container'>
        {productsData?.map((product) => <Product key={product.key} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
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