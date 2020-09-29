import React from 'react'
import { Button } from 'reactstrap'
import styles from './MiniProduct.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { useRouter } from 'next/dist/client/router'
import { actionAddToCart } from '../../redux/cart/actions'
import { useDispatch } from 'react-redux'

const MiniProduct = ({ id, name, discountPercent, price, pictures, product }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const addToCart = (e) => {
        e.stopPropagation()
        console.log("addToCart")
        
        dispatch(actionAddToCart(product, 1))
        return true
    }

    const viewProduct = (e) => {
        e.stopPropagation()
        console.log("viewProduct")
        router.push('products/[id]', `products/${id}`)
        return true
    }

    return (
        <div onClick={viewProduct} className={styles.miniProduct}>
            <div className={styles.imageHolder}>
                <img src={pictures} alt="" className="img-fluid" />
                <div className={styles.moreActions}>
                    <Button onClick={addToCart} color="primary" size="sm">
                        <span><FiShoppingCart size={14} /></span>
                        <span className="ml-2">Add to Cart</span>
                    </Button>
                    <Button onClick={viewProduct} color="primary" size="sm">
                        <span className="ml-2">View Product</span>
                    </Button>
                </div>
            </div>
            <div className={styles.textHolder}>
                <p className={styles.title + " text-"}>{name}</p>
                <p className="text-right m-0">
                    {discountPercent &&
                        <del className="text-muted">
                            <small>
                                Rs. {price}
                            </small>
                        </del>
                    }
                    <b className="ml-2 text-bold text-primary">
                        Rs. {discountPercent ? price * (1 - discountPercent) : price}
                    </b>
                </p>
                {discountPercent &&
                    <p className={styles.discount + " text-muted text-right m-0"}>
                        <small className=" bg-info p-1 text-light">
                            {discountPercent * 100}% Discount!
                    </small>
                    </p>
                }
            </div>
            {/* <a href="" className="stretched-link"></a> */}
        </div>
    )
}

export default MiniProduct