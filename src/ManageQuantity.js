import React, {useState, useEffect} from "react";
function ManageQuantity(props){
    const [quantity, setQuantity] = useState(+props.quantityToSend);
    const [quantityFP, setQuantityFP] = useState(+props.quantityToSend);
    useEffect(()=>{ 
        console.log("use effect called", props.quantityToSend);
        if(quantityFP!=props.quantityToSend){
            setQuantity(props.quantityToSend);
            setQuantityFP(props.quantityToSend);
        }
    })
    var clickEventHandler=(operation) =>{
        if(operation==="plus"){
            setQuantity(quantity+1);

        }else{
            setQuantity(quantity-1);
        }
    }
    return (
        <div>
            <input type="button" value="+" onClick={clickEventHandler.bind(this, "plus")} />
            {quantity}
            <input type="button" value="-" onClick={clickEventHandler.bind(this, "minus")} />
        </div>
    )
}
export default ManageQuantity;
