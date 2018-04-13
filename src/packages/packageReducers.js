const packageReducers = ( state = [], action ) => {
    switch( action.type ){
        case "CREATE_PACKAGE":
            return [
                ...state,
                {
                    id: action.package.id,
                    order: action.package.order,
                    name: action.package.name,
                    address: action.address,
                    status: 'NEW'
                }
            ];
        
        case "DISPATCH_PACKAGE":
            return state.map(( pck ) => {
                if ( pck.id === action.id ) {
                    pck.status = "DISPATCHED";
                }
                return pck;
            });
        
        case "DELIVER_PACKAGE":
            return state.map(( pck ) => {
                if ( pck.id === action.id ) {
                    pck.status = "DELIVERED";
                }
                return pck;
            });
        case "DELETE_PACKAGE":
            let index = 0,
                length = state.length - 1,
                associatedOrder = null;
                
            while ( index <= length ) {
                if ( state[ index ].id === action.id ) {
                    break;
                }
                index++;
            }
            
            let newState = state.slice();
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
}

export default packageReducers;