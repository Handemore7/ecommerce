import React, {useState} from 'react';
import {urlFor, client} from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'

import {Product} from '../../components'

import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({productsData, specProduct }) => {
    const {image, name, details, price} = specProduct;
    const [index, setIndex] = useState(0);

    const {incQty,  decQty, qty, onAdd} = useStateContext();

  return (

    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img  src={urlFor(image && image[index])} className='product-detail-image'/> 
                </div>
                <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img 
                            src={urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}

                            />
                    ))}
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>(20)</p>
                </div>
                <h4>Detalles:</h4>
                <p>{details}</p>
                <p className='price'>Precio: ${price}</p>
                <div className='quantity'>
                    <h3>Cantidad: </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decQty} >
                            <AiOutlineMinus />
                        </span>
                        <span className='num' onClick='' >
                            {qty}
                        </span>
                        <span className='plus' onClick={incQty} >
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick={() =>onAdd(specProduct, qty)}>Añadir al carrito</button>
                    <button type='button' className='buy-now' onClick=''>Comprar ahora</button>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>Tambien podría interesarte:</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {console.log(productsData)}
                        {productsData.map((item) => (
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "products"] {
        slug{
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
    const productsData = await client.fetch(productsQuery);
    const specProduct = await client.fetch(query);
  
    return {
      props: { productsData, specProduct }
    }
  }

export default ProductDetails