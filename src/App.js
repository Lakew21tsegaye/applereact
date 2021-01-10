import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

import Nav from './Component/Nav/nav.js'
import Footer from './Component/Footer/footer.js';
import Main from './Component/Main/main.js'


class App extends Component {
  render(){
	  return (
	    <div>
	       <Nav />  
	      <Main />  
	      <Footer /> 
	    </div>
	  )		
	}

}

export default App;
