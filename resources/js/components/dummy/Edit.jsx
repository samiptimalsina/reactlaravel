
import React, {Component} from 'react';
import axios from 'axios';
class Edit extends Component {
constructor(props) {
    super(props);
    this.state={
       contact:[],
        name:'',
        email:'',
        phone:'',
    }
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleEmailInputChange=this.handleEmailInputChange.bind(this);
    this.handleNameInputChange=this.handleNameInputChange.bind(this);
    this.handlePhoneInputChange=this.handlePhoneInputChange.bind(this);
}
    handleFormSubmit(event){
    event.preventDefault()
        const editData={
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        id:this.state.contact.id
        }
        axios.put('/api/contact/update/')

    }
    handleNameInputChange(event){
   this.setState({
       name:event.target.value

   })

    }
    handleEmailInputChange(event){
    this.setState({
        email:event.target.value
    })

    }
    handlePhoneInputChange(event){
     this.setState({
         phone:event.target.value
     })
    }

    componentDidMount() {
   const id=this.state.contact.id
        console.log(id);
    axios.get(`/api/contact/edit/${this.props.match.params.id}`).then(response=>{
        this.setState({
            contact:response.data,

        })


    })
    }

    render() {


        return (
            <div className="container">

                <form method="post" >
                        <fieldset>
                            <legend>Edit Contact details</legend>
                            <div className="form-group row">
                                <label htmlFor="staticName" className="col-sm-1 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" name="name" readOnly="" className="form-control-plaintext" id="staticName"
                                           placeholder="Full Name" required="required" onChange={this.handleNameInputChange} value={this.state.contact.fullname}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-1 col-form-label"  >Email</label>
                                <div className="col-sm-10">
                                    <input type="text" name="email" readOnly="" onChange={this.handleEmailInputChange} value={this.state.contact.email} className="form-control-plaintext" id="staticEmail"
                                           placeholder="exmple@domain.com"  required="required" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Contact No</label>
                                <div className="col-sm-10">
                                    <input type="text" readOnly="" onChange={this.handlePhoneInputChange} value={this.state.contact.phone} className="form-control-plaintext" id="staticEmail"
                                           name="number"  placeholder="+977-9860309035"  required="required" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Edit Contact</button>
                        </fieldset>
                    </form>

            </div>
        );
    }
}

export default Edit;
