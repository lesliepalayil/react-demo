const orderReducers = ( state = [], action ) => {
    switch( action.type ) {
        case "NEW_ORDER":
            return [
                ...state,
                {
                    id: action.order.id,
                    name: action.order.name,
                    diagnosis: action.order.diagnosis,
                    status: 'NEW'
                }
            ];
        case "SET_ORDER_STATUS":
            return state.map(( order ) => {
                if ( order.id === action.id ) {
                    order.status = action.status;
                }
                return order;
            });
        default:
            return state;
    }
}

export default orderReducers;