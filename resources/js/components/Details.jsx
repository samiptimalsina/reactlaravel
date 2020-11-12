import React, {Component} from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/contacts').then(response =>{
            this.setState({
                contacts:response.data
            })
        }).catch(err=>console.log(err));
    }
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Updated_at</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts !==null
                            ? this.state.contacts.map(contact=>(
                                <tr className="table-primary">
                                    <th scope="row" key={contact.id}>{contact.id}</th>
                                    <td>{contact.fulname}</td>
                                    <td>{contact.emaiil}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.created_at}</td>
                                    <td>{contact.updated_at}</td>
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
