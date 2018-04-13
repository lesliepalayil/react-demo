export const addOrder = ( order ) => {
    return {
        type: 'NEW_ORDER',
        order: order
    };
}

export const updateOrderStatus = ( id, status ) => {
    return {
        type: 'SET_ORDER_STATUS',
        id: id,
        status: status
    };
}

export const getAllOrders = () => {
    return {
        type: 'GET_ALL_ORDERS'
    };
}

