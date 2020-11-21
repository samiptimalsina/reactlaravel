import React, {Component} from 'react';

class Category extends Component {
    constructor() {
        super();
        this.nameChangeState=this.nameChangeState.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.state({
            category_name:'',

        })
    }
    nameChangeState(event){
        this.state({
            [event.target.name]:event.target.value
        })
    }
    handleFormSubmit(event){
        event.preventDefault();
        const categoryName={
            category_name:this.state.category_name
        }
        axios.post('http://127.0.0.1/api/category',categoryName).then((response=>{
            console.log(response.data);
        }))


    }

    render() {
        const {category_name}=this.state
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.nameChangeState}/>


            </form>
                <h1>Category page</h1>
            </div>
        );
    }
}

export default Category;
