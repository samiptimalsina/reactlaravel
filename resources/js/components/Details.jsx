import React, {Component} from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state={
            contacts:[]
        }
        function componentDidMount() {
            axios.get('/api/details').then(response =>{
                this.setState({
                    contacts:response.data
                })
            }).catch(err=>console.log(err));
        }
    }
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts !==null
                            ? this.state.contacts.map(contact=>(
                                <tr className="table-primary">
                                    <th scope="row" key={contact.id}>Primary</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>C{contact.phone}</td>
                                    <table className="table-primary">
                                        <tr>
                                            <td>Hello details componet</td>
                                        </tr>
                                    </table>
                                </tr>
                            ))
                            :   <table className="table-primary">
                                <tr>
                                    <td>No data get </td>
                                </tr>
                                 </table>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Details;
