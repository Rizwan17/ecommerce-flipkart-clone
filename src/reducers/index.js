import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import authReducer from './auth.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer
});

export default rootReducer;