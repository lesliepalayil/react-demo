import React from 'react';
import PropTypes from 'prop-types';

const packagesList = ({packages, onDispatchedPackage, onDeletePackage, onDeliveredPackage}) => {
    let oList;
    if ( packages.length ) {
        oList = (
            packages.map((pck, index) => {
                let buttons = [];
                if ( pck.status === 'NEW' ) {
                    buttons.push(
                        <button onClick={(e) => onDispatchedPackage(e, pck.id)}>Dispatch</button> 
                    )
                    buttons.push(
                        <button onClick={(e) => onDeletePackage(e, pck)}>Delete</button> 
                    )
                } else if ( pck.status === 'DISPATCHED' ) {
                    buttons.push(
                        <button onClick={(e) => onDeliveredPackage(e, pck.id)}>Delivered</button>
                    )
                }

                return <li key={pck.id} className="opm-list-item">{pck.name} <strong>({pck.status})</strong>&nbsp;{buttons}</li>
            })
        )
    } else {
        oList = (<li>No Packages Found</li>)
    }

    return <ul className="opm-list">{oList}</ul>
}

packagesList.propTypes = {
    packages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            order: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDispatchedPackage: PropTypes.func.isRequired,
    onDeletePackage: PropTypes.func.isRequired,
    onDeliveredPackage: PropTypes.func.isRequired
};

export default packagesList;