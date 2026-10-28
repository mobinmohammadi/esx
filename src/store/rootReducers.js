import  authReducer  from "./Reducers/authReducers";
import  categoryReducer  from "./Reducers/categoryReducers";

const rootReducer = {
    auth : authReducer,
    category : categoryReducer
}

export default rootReducer