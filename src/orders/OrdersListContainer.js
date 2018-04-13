import { connect } from 'react-redux';
import { addOrder, updateOrderStatus } from './orderActions';
import { createPackage } from '../packages/packageActions';
import OrdersList from './OrdersList';

const mapStateToProps = (state, props) => {
    let status = props.status || "ALL";
    return {
        orders: state.orders.filter( order => order.status === status || status === "ALL" )
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCreatePackage: (e, id) => {
            dispatch(
                createPackage({
                    id: Math.random(),
                    order: id,
                    name: "Order Package " + id
                })
            )
            dispatch( updateOrderStatus(id, "CREATED") );
        } 
    };
};

const OrdersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( OrdersList );

export default OrdersListContainer;