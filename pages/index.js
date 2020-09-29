import { useDispatch, useStore } from 'react-redux'
import HeroSection from '../components/HeroSection/HeroSection'
import ProductCatalogSection from '../components/ProductsCatalogSection/ProductsCatalogSection'
import { getProducts } from '../redux/products/actions'

export default function IndexPage() {
  let store = useStore()
  let dispatch = useDispatch()
  dispatch(getProducts())
  return (
    <>
      <HeroSection />
      <ProductCatalogSection />
    </>
  )
}
