import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import App from "./App";
function Index() {
    return (
        <React.Fragment>
            <Header/>
           <BrowserRouter>
             <App/>
           </BrowserRouter>

        <Footer/>
        </React.Fragment>
    );
}
export default Index;
ReactDOM.render(<Index/>, document.getElementById('root'));

