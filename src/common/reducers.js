import { combineReducers } from 'redux';
import orderReducers from '../orders/orderReducers';
import packageReducers from '../packages/packageReducers';

const opm = combineReducers({
    orders: orderReducers,
    packages: packageReducers
});

export default opm;