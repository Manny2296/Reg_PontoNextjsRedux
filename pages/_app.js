// import App from 'next/app'
import Store from '../store/configureStore'
import { Provider } from 'react-redux'
import App from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import {createStore} from "redux"; 
import AddRegPonto from '../store/reducers/dataReducer'
import {PersistGate} from 'redux-persist/integration/react';
import UserContext from '../components/UserContext'
//import {makeStore} from "../lib/redux";
import reduxStore from '../lib/redux';

const makeStore = (initialState, options) => {
   return createStore(AddRegPonto, initialState);
};

class RegistroPontoMF extends App {

   
  /*static async getInitialProps({Component, ctx}) {
  console.log("Solo entre al app una vez")
    // we can dispatch from here too
    ctx.store.dispatch({type: 'ADD_REG_PONTO', value: [{"name": "Manuel Felipe", "ndoc": 1018484513,"horaingreso":"07:00:00 AM", "horasalida":""},
    {"name": "Daneil Felipe", "ndoc":79280440,"horaingreso":"07:12:02 AM", "horasalida":""}
    ]});

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  
    return {pageProps};

}*/
    render() {
        const {Component, pageProps, store} = this.props;

        //console.log(this.props.data); <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        return (
            <Provider store={store}>
                 <PersistGate persistor={store.__PERSISTOR} loading={null}>
                <Component {...pageProps} />
                </PersistGate>
            </Provider>
        );
    }

}

  
  // Only uncomment this method if you have blocking data requirements for  </PersistGate>
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default withRedux(reduxStore)(RegistroPontoMF); 