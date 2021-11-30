import React, { Component } from 'react'
import Filter from './Filter';
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ],
    };

    constructor(props) {
        super(props);
        this.state.complete = this.state.customers;
    }
    render() {
        return (
            <div>
                <Filter filterEvent={(txt) => this.filterCustomer(txt)}/>
                {
                    this.state.customers.map(c => <CustomerRow 
                        delEvent={(id) => this.deleteCustomer(id)}
                        customer ={c} key={c.id}/>)
                }
            </div>
        )
    }
    
    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // async function to update the state
       this.setState({
           customers: custs
       })
    }

    filterCustomer(txt) {
        let custs = this.state.complete.filter(c => c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >=0 )
        this.setState({
            customers: custs
        })
    }
}
