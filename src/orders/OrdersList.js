import React from 'react';
import PropTypes from 'prop-types';

const OrdersList = ({orders, onCreatePackage}) => {
    let oList;
    if ( orders.length ) {
        oList = (
            orders.map((order, index) => {
                return <li key={order.id} className="opm-list-item">{order.name} <strong>({order.status})</strong>&nbsp; 
                    <button onClick={(e) => onCreatePackage(e, order.id)}>Create Package</button>
                </li>
            })
        )
    } else {
        oList = (<li>No Orders Found</li>);
    }

    return <ul className="opm-list">{oList}</ul>
}

OrdersList.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onCreatePackage: PropTypes.func.isRequired
};

export default OrdersList;