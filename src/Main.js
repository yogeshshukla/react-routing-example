import React from "react";
export function ContactUs({location}){ // destructuring
    return(<div><h1>{location.pathname}ContactUs component</h1></div>);

}
export function Feedback(){
    return(<div><h1>Feedback component</h1></div>);
}
