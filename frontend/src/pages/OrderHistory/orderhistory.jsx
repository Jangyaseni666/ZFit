import React from "react";
import "./orderhistory.css";
import { useState, useEffect } from "react";

function OrderHistory() {
  const [orderdata, setOrderdata] = useState([]);
  const [state, setState] = useState(false);
  const uid = localStorage.getItem("userid");

  const get_his = async () => {
    const token = await localStorage.getItem("token");
    console.log(token);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}history/history${uid}`,
      {
        method: "GET",
        headers: {
          Authorization: JSON.parse(token),
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setOrderdata(data);
      if(data.length===0){
        setState(false)
      }else{
        setState(true);
      }
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    if (uid != null) {
      get_his();
    }
  }, []);

  // function OrderHistory(){
  //     const getOrders=async()=>{
  //         try{
  //             const response = await fetch(`http://localhost:4002/history/${id}`, {
  //             method: "GET",
  //             })
  //             if (response.ok) {
  //                 const data = await response.json();
  //                 console.log(data);
  //                 setOrderdata(data);
  //                 setState(true);
  //                 console.log(orderdata);
  //               } else {
  //                 const err = await response.json();
  //                 throw new Error(err);
  //               }
  //         }
  //         catch(error){
  //             console.log(error);
  //         }
  //     }
  //     useEffect(()=>{
  //         getOrders();
  //     },[]);
  //   console.log(orderdata);
  return (
    <div className="allorders">
      {state === false ? (
        <h1>No Orders Placed</h1>
      ) : (
        <div>
          <h1 style={{display:"flex",justifyContent:"center",fontWeight:"500"}}>Order History</h1>
          {orderdata.map((el) => {
            return (

            
                <div>
                <h1>Product ID:{el.pid}</h1>
                <h1>Cost of the Product:{el.cost}</h1>
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default OrderHistory;
