import React, { Component } from 'react';
class Component1 extends Component {
    state = {  } 
    render() { 
        return (
            <><div style={{backgroundColor:"#2874f0",display:"flex",justifyContent:"center",width:"100%"}}>   
                        <div className="row" style={{backgroundColor:"#2874f0",display:"flex",alignItems:"center",justifyContent:"space-between",width:"70%",padding:"10px",height:"36px"}}>
                <div className="nav logo" style={{width:"80px"}}>
               <img src="flipkart.png" alt=""  style={{width:"80px"}}/>
               <span style={{display:"flex",alignItems:"center",marginTop:"-5px"}}><a class="_21ljIi" href="/plus" style={{fontSize:"12px",fontWeight:"500",fontStyle:"italic",color:"white",textDecoration:"none"}}>Explore <span style={{color:"#ffe500"}}>Plus</span><img style={{width:"12px"}} src="plus.png" /></a></span>
                </div>
                <div className="nav inputDiv"  style={{height:"90%",width:"45%",background:"white",display:"flex",alignItems:"center",borderRadius:"2px"}}>
                    <input type="text" style={{height:"90%",width:"93%",border:"none", outline: "none",padding: "0px 20px",fontSize: "14px"}}/><i style={{fontSize: "20px",color:" #2874f0",width:"5%",padding:"10px"}} class="fa fa-search" aria-hidden="true"></i>
                </div>
                <button style={{width: "12%",height:" 80% ",border: "none",fontSize:" 16px",fontWeight: "0",color:"#2874f0",backgroundColor:"white",borderRadius:"2px"}}>Login</button>
                <p style={{color:"white",lineHeight: "20px",fontSize: "16px",letterSpacing: ".1px",fontWeight:" 500"}}>Become a Seller</p>
                <p style={{color:"white",lineHeight: "20px",fontSize: "16px",letterSpacing: ".1px",fontWeight:" 500"}}>More <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                <button style={{backgroundColor:"transparent",border:"none",color:"white",fontSize:"16px",fontWeight:"500"}}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</button>
            </div>
            </div>
 
            </>
            );
    }
}
 
export default Component1;