import React from 'react'

import Route from './route' ;
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux' ;
import ReduxThunk from 'redux-thunk';
import reducers from './route/container/reducers';


class Wrapper extends React.Component{

    render(){

        const state = createStore(reducers,{}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={state}>
                     <Route/>
            </Provider>
           
        )
    }
}

export default Wrapper ;