import React, { Component } from 'react';
import OrdersListContainer from '../orders/OrdersListContainer';
import PackagesListContainer from '../packages/PackagesListContainer';
import { addOrder } from '../orders/orderActions';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor() {
        super();
       
        let self = this;
        console.log("A", arguments[0]);
        /*
        store.subscribe(()=>{
            console.log("SUB: ", arguments);
        });//*/
    }

    getReportNameById( id ) {
        var self = this,
            report = self.state.draftReports.filter((r) => { return r.id == id; });
        if ( report.length ){
            return report[0];
        }
        return null;
    }

    createNewOrder(e) {
        var self = this;
        let id = Math.random();
        self.props.dispatch(
            addOrder({
                id: id,
                diagnosis: "Random Diagnosis " + id,
                name: "Order: " + id
            }) 
        );
    }

    render() {
        let self = this;        
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={(e) => { this.createNewOrder(e);}} >Create New Order</button>
                <div className="opm-flex" style={{'margin-top': '10px'}}>
                    <div className="opm-flex-item">
                        <h2>New Orders</h2>
                        <OrdersListContainer status="NEW" />
                    </div>
                    <div className="opm-flex-item">
                        <h2>New Packages</h2>
                        <PackagesListContainer status="NEW" />
                    </div>
                    <div className="opm-flex-item">
                        <h2>Dispatched Items</h2>
                        <PackagesListContainer status="DISPATCHED" />
                    </div>
                </div>
                <div className="opm-flex" style={{'margin-top': '10px'}}>
                    <div className="opm-flex-item">
                        <h2>Delivered Items</h2>
                        <PackagesListContainer status="DELIVERED" />
                    </div>
                </div>
            </div>
        );
    }    
}

Dashboard = connect()(Dashboard);

export default Dashboard;