import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
export function Languages({match}){
    console.log(match);
    var angularUrl = match.path+"/Angular";
    var reactUrl = match.path+"/React";
    var nodeUrl = match.path+"/Node";

    return(<div>
        <h1>Languages component</h1>
    <NavLink to={angularUrl} activeStyle={{color:"green", fontSize:"48px"}}>Angular</NavLink>
    <NavLink to={reactUrl} activeStyle={{color:"green", fontSize:"48px"}}>React</NavLink>
    <NavLink to={nodeUrl} activeStyle={{color:"green", fontSize:"48px"}}>Node</NavLink>
    <Route path={angularUrl} render={(props) =>{return(
        <h1>{props.match.path} component loaded</h1>
    )}}></Route>
    
    <Route path={reactUrl} render={(props) =>{return(
        <h1>{props.match.path} component loaded</h1>
    )}}></Route>

    <Route path={nodeUrl} render={(props) =>{return(
        <h1>{props.match.path} component loaded</h1>
    )}}></Route>
    </div>
    );
}