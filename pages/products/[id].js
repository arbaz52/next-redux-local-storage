import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import HeroSection from '../../components/HeroSection/HeroSection'
import MegaProduct from '../../components/MegaProduct/MegaProduct'
import ProductCatalogSection from '../../components/ProductsCatalogSection/ProductsCatalogSection'
import { getProducts } from '../../redux/products/actions'

export default function Product() {
    const params = useRouter().query
    const { id } = params
    console.log(id)
    const { products, loading, error, fetched } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!fetched)
            dispatch(getProducts())
    }, [])

    const [product, setProduct] = useState(null)

    
    useEffect(() => {
        if (fetched) {
            for (let _product of products) {
                if (_product.id == id) {
                    setProduct(_product)
                    break
                }
            }
        }
    }, [fetched])

    return (
        <div className="container py-5">
            <MegaProduct {...product} product={product}/>
        </div>
    )
}
