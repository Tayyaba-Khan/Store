import React, {Component} from "react";
import Data from './data';
import Product from './products';
import Nav from "./Navbar/Nav";
import Header from "./Header/Header";
import Shopping from "./Shopping/shopping";
import News from "./News/News";
import Footer from "./Footer/Footer";

class App extends Component{
    state = {
        data : Data,
        productData: Product
    }
    render(){
        return(
            <div>
                <Nav navy={this.state.data[0].nav}/>
                <Header head={this.state.data[0].header}/>
                <Shopping shop={this.state.productData[0].cards} shopOne={this.state.data[0].card_side} shopTwo={this.state.data[0].card_price} shopThree={this.state.data[0].colo}/>
                <News news={this.state.data[0].news}/>
                <Footer footer={this.state.data[0].footer}/>
            </div>
        )
    }
}

export default App;