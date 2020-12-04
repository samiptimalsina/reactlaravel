import React, {Component} from 'react';
import {Link,} from 'react-router-dom';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        axios.get('/api/contacts').then(response =>{
            this.setState({
                contacts:response.data
            })
        }).catch(err=>console.log(err));
    }

    editContact(contactId){
    console.log('clicke');

    }


    render() {
        return (
            <div>
                <table className="table table-hover"  style={{overflowX: "scroll"}}>
                    <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact no</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Updated_at</th>
                        <th scope="col">Action <Link to="/add" className="btn btn-primary">Add</Link></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts !==null
                            ? this.state.contacts.map(contact=>(

                                <tr className="table-primary" key={contact.id}>
                                    <th scope="row" >{contact.id}</th>
                                    <td>{contact.fullname}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.created_at}</td>
                                    <td>{contact.updated_at}</td>
                                    <td>
                                        <Link to={`/contact/delete/${contact.id}`} className="btn btn-danger">Delete</Link>
                                        <Link to={`/contact/edit/${contact.id}`}className="btn btn-info"> Edit</Link>
                                    </td>
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
