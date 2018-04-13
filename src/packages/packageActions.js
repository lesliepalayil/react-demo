export const createPackage = ( pck ) => {
    return {
        type: 'CREATE_PACKAGE',
        package: pck
    };
}

export const dispatchPackage = ( id ) => {
    return {
        type: 'DISPATCH_PACKAGE',
        id: id
    };
}

export const deletePackage = ( id ) => {
    return {
        type: 'DELETE_PACKAGE',
        id: id
    };
}


export const deliverPackage = ( id ) => {
    return {
        type: 'DELIVER_PACKAGE',
        id: id
    };
}