import  React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import ProductList from "./dummy/ProductList";
import Details from "./Details";
import Default from "./Default";
import Cart from "./dummy/Cart";
import Addcontact from "./dummy/Addcontact";
import Category from "./dummy/Category";
import Edit from "./dummy/Edit";
const App=()=>{
    return (
        <>
        <BrowserRouter>
           <Switch>
               <Route  path='/' exact component={Details}/>
               <Route path='/add' exact component={Addcontact}/>
               <Route  path='/contacts' exact component={Details}/>
               <Route  path ='/cart' exact component={Cart}/>
               <Route  path='/default' exact component={Default}/>
               <Route  path='/product' exact component={ProductList}/>
               <Route  path='/category' exact component={Category}/>
               <Route  path='/contact/edit/:id'  exact component={Edit}/>

           </Switch>
        </BrowserRouter>
        {/*<Header/>*/}
        {/*<ProductList/>*/}
        {/*<Details/>*/}
        {/*<Default/>*/}

        </>

    );

}
export default App;
