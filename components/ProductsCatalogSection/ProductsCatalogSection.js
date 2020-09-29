import React, { useEffect } from 'react'
import { connect, useSelector, useStore } from 'react-redux'
import MiniProduct from '../MiniProduct/MiniProduct'


const ProductCatalogSection = () => {
    let { products, loading, error } = useSelector(state => state.products)

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>
                            Products
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center flex-wrap">
                        {
                            loading ? <div className="alert alert-primary">Please wait, loading products...</div>
                                : error ? <div className="alert alert-primary">Please wait, loading products...</div>
                                : products.map(product => <MiniProduct key={product.id} {...product} product={product} /> )
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ProductCatalogSection