import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import {Feedback, ContactUs} from "./Main"; 
import Books from "./Books"; 
import Book from "./Book"; 
import {Languages} from "./Languages"; 
import Employees from './Employees';
import EmpEdit from './EmpEdit';
import ControlManageQuantity from './ControlManageQuantity';
import GetUserData from "./GetUserData";


function App() {
  // var menuArra = [{path:"/feedback", component: "Feedback"}, {path:"/books", component: "Books"}];
  // var rout = menuArra.map((item) =>{
  //   console.log(item);
  //   return(
  //     <li>
  //           <Link to={item.path}>{item.component}</Link>
  //     </li>
  //   ); 
  // });
  return (
     
    <div className="App">
      <h>Routig example</h>
      <div id="navigation">
        <ul>
        
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/languages">Languanges</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/employee">employees</Link>
          </li>
          <li>
            <Link to="/controlmanagequantity">Manage Quantity</Link>
          </li>
          <li>
            <Link to="/getuserdata">Get user data</Link>
          </li>
          
        </ul>
        <Switch>
          <Route path="/" exact component={Books}></Route>
          <Route path="/feedback" component={Feedback}></Route>
          <Route path="/controlmanagequantity" component={ControlManageQuantity}></Route>
          <Route path="/getuserdata" component={GetUserData}></Route>
          <Route path="/books" exact component={Books}></Route>
          <Route path="/books/:bookId" component={Book}></Route>
          <Route path="/languages" component={Languages}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/employee" component={Employees}></Route>
          <Route path="/empedit/:EmployeeId" component={EmpEdit}></Route>
          <Route render={()=>{return (<div><h1>Page 404 Compoent</h1></div>)}} ></Route>    
          {/* <Route render={()=>{<Home pdoructsArr={productsArr}>}} ></Route>
          <Route component={()=>{<Home pdoructsArr={productsArr}>}} ></Route> */}
        </Switch>
      </div>
      <div id ="container">
        Learn react
      </div>
      <div id="footer">
      <h3>copyright 2019</h3>
      </div>
    </div>
  );
}

export default App;
