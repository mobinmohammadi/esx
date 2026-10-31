import  authReducer  from "./Reducers/authReducers";
import  categoryReducer  from "./Reducers/categoryReducers";
import productsReducer from './Reducers/productReducers';

const rootReducer = {
    auth : authReducer,
    category : categoryReducer,
    products : productsReducer
}

export default rootReducer