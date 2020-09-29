import { Field, Form, Formik } from 'formik'
import React, { } from 'react'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddToCart } from '../../redux/cart/actions'


const MegaProduct = ({ id, name, description, discountPercent, price, pictures, product }) => {
    const dispatch = useDispatch()
    const initialValues = {
        quantity: 1
    }
    const onSubmit = ({quantity}) => {
        console.log(quantity)

        dispatch(actionAddToCart(product, quantity))
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={pictures} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12 py-5">

                    {discountPercent &&
                        <p className={" text-muted text-left mt-2"}>
                            <span className=" bg-info p-1 text-light px-2">
                                {discountPercent * 100}% Discount!
                            </span>
                        </p>
                    }
                    <h2 className="text-capitalize">
                        <b>
                            {name}
                        </b>
                    </h2>
                    <p className="text-muted">
                        {description}
                    </p>
                    <div className="row">
                        <div className="col">
                            <span className="text-left m-0">
                                <span>
                                    Price:
                                </span>
                                {' '}
                                {discountPercent &&
                                    <del className="text-muted">
                                        Rs. {price}
                                    </del>
                                }
                                <h2 className="ml-2 d-inline text-primary">
                                    Rs. {discountPercent ? price * (1 - discountPercent) : price}
                                </h2>
                            </span>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-8">

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <InputGroup>
                                        <Field as={Input} type="number" name="quantity" min="1" />
                                        <InputGroupAddon addonType="append">
                                            <Button color="dark" style={{ borderRadius: 0 }} type="submit">
                                                <span>
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="ml-3">
                                                    Add to Cart
                                                </span>
                                            </Button>

                                        </InputGroupAddon>
                                    </InputGroup>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default MegaProduct