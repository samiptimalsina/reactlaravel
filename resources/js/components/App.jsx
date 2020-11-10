import  React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProductList from "./dummy/ProductList";
import Details from "./Details";
import Default from "./Default";
import Cart from "./dummy/Cart";
const App=()=>{
    return (
        <>
        <BrowserRouter>
           <Switch>
               <Route exact path='/' component={Details}/>
               <Route exact path='/details' component={Details}/>
               <Route exact path='/cart' component={Cart}/>
               <Route exact path='/default' component={Default}/>
               <Route exact path='/product' component={ProductList}/>
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
