import React from "react";
import {Brand,CTA,Navbar} from './components'
import {Blog,Header,Footer,Feature,Possibility,Whatgpt} from './containers'
import './App.css'
const App = () =>{
  return (
    <div className="App">  
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />   
      <Whatgpt />
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      
    </div>
  );
};
export default App;
