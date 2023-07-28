import React from "react";
import "./orderhistory.css";
import { useState,useEffect } from "react";

function OrderHistory(){
    const id=localStorage.getItem("uid");
    const [orderdata,setOrderdata]=useState([]);
    const [state,setState]=useState(false);
    const getOrders=async()=>{
        try{
            const response = await fetch(`http://localhost:4002/history/${id}`, {
            method: "GET",
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setOrderdata(data);
                setState(true);
                console.log(orderdata);
              } else {
                const err = await response.json();
                throw new Error(err);
              }
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getOrders();
    },[]);
    console.log(orderdata);
    return(
        <div className="allorders">
            {(state===false)?(<h1>No Orders Placed</h1>)
            :(<div>
                {orderdata.map((el)=>{
                return(
                    <div>
                        <h1>Product ID:{el.pid}</h1>
                        <h1>Cost of the Product:{el.cost}</h1>
                    </div>
                )
            })}</div>)}
        </div>
    )
}
export default OrderHistory;