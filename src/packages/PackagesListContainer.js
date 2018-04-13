import { connect } from 'react-redux';
import { dispatchPackage, deletePackage, deliverPackage } from './packageActions';
import { updateOrderStatus, getAllOrders } from '../orders/orderActions';
import packagesList from './PackagesList';

const mapStateToProps = (state, props) => {
    let status = props.status || "NEW";
    return {
        packages: state.packages.filter( pck => pck.status === status )
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDispatchedPackage: (e, id) => {
            dispatch( dispatchPackage(id) );
        },
        onDeletePackage: (e, pck) => {
            dispatch( deletePackage(pck.id) );
            dispatch( updateOrderStatus( pck.order, "NEW" ) );
        },
        onDeliveredPackage: (e, id) => {
            dispatch( deliverPackage(id) );
        }
    };
};

const packagesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( packagesList );

export default packagesListContainer;