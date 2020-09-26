import {combineReducers } from 'redux' ;
import BlogReducer from './blogReducer' ;


const rootReducer = combineReducers({
   blogsList: BlogReducer
})

export default rootReducer ;