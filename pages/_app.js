import '../styles/globals.css'
import App from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import withRedux from 'next-redux-wrapper'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header/Header'
import Document, { Html, Head, } from 'next/document'
import { ToastContainer } from 'react-toastify'
import { actionLoadFromLocalStorage } from '../redux/cart/actions'


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { appProps }
  }
  render() {
    const { Component, appProps } = this.props
    setTimeout(() => {
      store.dispatch(actionLoadFromLocalStorage())

    }, 1)
    return (
      <Provider store={store}>
        <ToastContainer />
        <Header />
        <Component {...appProps} />
      </Provider>
    )
  }
}

const makeStore = () => store

export default withRedux(makeStore)(MyApp)