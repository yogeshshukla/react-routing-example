import React, {useState, useEffect} from "react";
import axios from "axios";
import { isFunction } from "@babel/types";
function GetUserData(){
    const [userArr, setUserArr] = useState([]);
    function clickEventHandler(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{
            var tempArr  = response.data.map((item)=>{
                return (
                    <li>{item.name}</li>
                )
            })
            setUserArr(tempArr);
        })
        .catch((err) =>{
            console.log(err);
        });
    }
    const postClickEventHandler =()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts", {postId:88, postName:"leraning react"})
        .then((response) =>{
            console.log(response);
        })
        .catch((err) =>{
            console.log(err);
        });
    }
    return(
        <div>
            <input type="button" value="Get User detaila" onClick={clickEventHandler} />
            <input type="button" value="Post user details" onClick={postClickEventHandler} />
            {userArr}
        </div>
    );
}
export default GetUserData;