import React from 'react'
import { TiSocialFacebook } from 'react-icons/ti'
import { RiInstagramFill } from 'react-icons/ri'
import { ImLinkedin2 } from 'react-icons/im'
import { FiShoppingCart } from 'react-icons/fi'
import { Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

const Header = () => {
    const cart = useSelector(state => state.cart)
    const router = useRouter()
    const gotoCart = () => {
        router.push("/cart")
    }
    
    const gotoHome = () => {
        router.push("/")
    }
    return (
        <header className="py-4 sticky-top " style={{background: "white"}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Button onClick={gotoCart} color="primary" style={{ borderRadius: 75 }}>
                            <span>
                                <FiShoppingCart size={14} />
                            </span>
                            {
                                cart.length > 0 &&
                                <span className="ml-2">
                                    {cart.length}
                                </span>
                            }
                        </Button>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <h3 onClick={gotoHome} className="btn btn-link">
                            rstorer.
                        </h3>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                        <TiSocialFacebook size={16} className="ml-2" />
                        <RiInstagramFill size={16} className="ml-2" />
                        <ImLinkedin2 size={16} className="ml-2" />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header