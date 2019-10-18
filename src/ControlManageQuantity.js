import React, {useState, useEffect} from "react";
import ManageQuantity from "./ManageQuantity";
import axios from "axios";
var  ControlManageQuantity = (props)=>{
    var [userQuantity, setUserQuntity] = useState(1)
    var [showMQ, setShowMQ] = useState(false);
    const [userArr, setUserArr] = useState([]);
    useEffect(() =>{
        console.log("cmq use feffect called");
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
        return (()=>{console.log("cmq use feffect called during unmouting");})
    }, []);
    useEffect(()=>{
        console.log("second use effect called");
    });
    useEffect(()=>{
        console.log("third use effect called");
    }, [userQuantity]);
    // var setQuantityEvent=() =>{
    //     setShowMQ(true);
    //     //setUserQuntity(userQuantity);
        
    // }
    // var onChangeHandler =(event)=>{
    //     setUserQuntity(event.target.value);

    // }
    return (
        <div>
            <input type="text" value={userQuantity} onChange={(event)=>{
                setUserQuntity(event.target.value);
            }} />
            
            <input type="button" value="Set Quantity" onClick={() =>{
                setShowMQ(true);
            }} />
            {userQuantity}
            {userArr}
            {showMQ && <ManageQuantity quantityToSend={userQuantity}/>}
        </div>
    );

}
export default ControlManageQuantity;