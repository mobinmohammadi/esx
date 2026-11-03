import  authReducer  from "./Reducers/authReducers";
import  categoryReducer  from "./Reducers/categoryReducers";
import productsReducer from './Reducers/productReducers';
import  sellerReducer  from "./Reducers/sellerReducers";

const rootReducer = {
    auth : authReducer,
    category : categoryReducer,
    products : productsReducer,
    sellers : sellerReducer
}

export default rootReducer