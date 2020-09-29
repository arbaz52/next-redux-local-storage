import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { AiOutlineClose } from 'react-icons/ai'
import { actionRemoveFromCart, actionUpdateProductQuantity } from '../redux/cart/actions'
import thunk from 'redux-thunk'

const CartPage = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <h1>Cart</h1>
                    <p className="lead">
                        Let's take a look at your cart
                    </p>
                    <table className="table">
                        <thead className="text-nowrap" style={{ fontSize: "0.8em" }}>

                            <tr>
                                <th>
                                    Image
                            </th>
                                <th>
                                    Name
                            </th>
                                <th>
                                    Quantity
                            </th>
                                <th>
                                    Unit Price (Rs. )
                            </th>
                                <th>
                                    Discount (%)
                            </th>
                                <th>
                                    Total (Rs. )
                            </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(_p => {
                                    const { product, quantity } = _p
                                    return (
                                        <tr key={product.id}>
                                            <td>
                                                <img src={product.pictures} alt="" style={{ width: 100 }} />
                                            </td>
                                            <td>
                                                {product.name}
                                            </td>
                                            <td>
                                                <Input
                                                    bsSize="sm"
                                                    type="number"
                                                    value={quantity}
                                                    min="0"
                                                    step="1"
                                                    style={{ width: 60 }}
                                                    onChange={e => dispatch(actionUpdateProductQuantity(product, e.target.value))} />
                                            </td>
                                            <td>
                                                {product.discountPercent &&
                                                    <del className="text-muted">
                                                        <small>
                                                            {product.price} <br />
                                                        </small>
                                                    </del>
                                                }
                                                <b className="text-bold text-primary">
                                                    {product.discountPercent ? product.price * (1 - product.discountPercent) : product.price}
                                                </b>
                                            </td>
                                            <td>
                                                {
                                                    product.discountPercent ?
                                                        <small className="bg-primary px-2 py-1 text-center text-light">{product.discountPercent * 100}%</small>
                                                        :
                                                        <p className="text-muted">Nan</p>
                                                }
                                            </td>
                                            <td>

                                                <b className="ml-2 text-bold text-primary">
                                                    {(product.discountPercent ? product.price * (1 - product.discountPercent) : product.price) * quantity}
                                                </b>
                                            </td>
                                            <td>
                                                <Button color="danger" onClick={e => dispatch(actionRemoveFromCart(product))}>
                                                    <AiOutlineClose />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Cart Sub Total
                        </div>
                        <div className="card-body">
                            <table className="table table-borderless m-0">
                                <tbody>

                                <tr>
                                    <td >
                                        Sub Total:
                                        
                                    </td>
                                    <td>
                                        Rs. {
                                            cart.map(_p => {
                                                const {product, quantity} = _p
                                                return (product.discountPercent ? product.price * (1 - product.discountPercent) : product.price) * quantity
                                            }).reduce((a, b) => {
                                                return a + b
                                            }, 0)
                                        }
                                    </td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage