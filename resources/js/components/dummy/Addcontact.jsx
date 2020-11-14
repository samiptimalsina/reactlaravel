import React, {Component} from 'react';
import axios from 'axios';
class Addcontact extends Component {
    constructor(props) {
        super(props);
        this.state={
           name:'',
           email:'',
           phone:'',
        }
        this.handleNameInputChange=this.handleNameInputChange.bind(this);
        this. handleEmailInputChange=this. handleEmailInputChange.bind(this);
        this.handlePhoneInputChange=this.handlePhoneInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(event){
        event.preventDefault()
        axios.post('/api/contacts-create',{
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
        }).then(response=>{
            this.setState({
                name:'',
                email:'',
                phone:'',
            })
            this.props.history.push('/');

        }).catch(err=> console.log(err));
        // console.log(this.state);
    }
    handleNameInputChange(event) {
        this.setState({
            name:event.target.value
        })

    }
    handleEmailInputChange(event) {
        this.setState({
            email:event.target.value
        })

    }

    handlePhoneInputChange(event) {
        this.setState({
            phone:event.target.value

        })

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} method="post">
                    <fieldset>
                        <legend>Add Contact details</legend>
                        <div className="form-group row">
                            <label htmlFor="staticName" className="col-sm-1 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" name="name" readOnly="" className="form-control-plaintext" id="staticName"
                                      placeholder="Full Name" required="required" onChange={this.handleNameInputChange} value={this.state.name}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" name="email" readOnly="" className="form-control-plaintext" id="staticEmail"
                                      placeholder="exmple@domain.com"  required="required" onChange={this.handleEmailInputChange} value={this.state.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Contact No</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail"
                                     name="number"  placeholder="+977-9860309035"  required="required" onChange={this.handlePhoneInputChange} value={this.state.phone}/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }



}

export default Addcontact;
