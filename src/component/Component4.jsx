import React, { Component } from 'react'
<>
</>;
class Component4 extends Component {
    state = {}
    render() {
        return (
            <>
                <div style={{backgroundColor:" rgb(234, 234, 234)",width: "98%", padding: "1%",paddingTop:"0%",display:"flex",justifyContent:'space-between'}}>
                 
                    <div className="rowbox" style={{ backgroundColor:"white",width: "80%", padding: "1%",display:"flex",flexDirection:"column", justifyContent:"space-between",boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px" }}>
                        <div className="row" style={{ width: "100%", display: "flex", justifyContent: "space-between",borderBottom:"1px solid #bcbcbc",padding:"10px" }}><div className='headhead'><h2>Beauty, Food, Toys & More</h2><p className="pp1">Beauty, Food, Toys & More</p></div><button className='vall'>VIEW ALL</button></div>
                        
                        <div className="row" style={{width:"98%",justifyContent:"space-between"}}>
                        <div className="absolute" style={{width:"78.5%",display: "flex",alignItems:"center",height:"350px",justifyContent:"flex-end"}}>
                    <button style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>
                            <div className="card">
                                <img src="cart0.webp" alt="" />
                                <div>
                                <h5>Runner</h5>
                                <p className="pp1">From &#2352;400</p>
                                <p className="pp12">Gym Goods</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="cart1.webp" alt="" />
                                <div>
                                <h5>Sports</h5>
                                <p className="pp1">From &#2352;249</p>
                                <p className="pp12">Bat,Ball,Bootball</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="cart2.webp" alt="" />
                              <div>
                              <h5>Daily Items</h5>
                                <p className="pp1">From &#2352;20</p>
                                <p className="pp12">Shampoo,Facewash,Powder</p>
                              </div>
                            </div>
                            <div className="card">
                                <img src="cart3.webp" alt="" />
                                <div>
                                <h5>Baby Kit</h5>
                                <p className="pp1">From &#2352;242</p>
                                <p className="pp12">Towel,Baby Jhonson</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="cart4.webp" alt="" />
                               <div>
                               <h5>Routine Tools</h5>
                                <p className="pp1">From &#2352;24</p>
                                <p className="pp12">Toothpaste,Brush,Deo</p>
                               </div>
                            </div>
                            {/* <div className="card">
                                <img src="cart5.webp" alt="" />
                                <h5>Tools</h5>
                                <p className="pp1">From &#2352;2400</p>
                                <p className="pp1">Dumble,Elements</p>
                            </div> */}
                            <div className="card">
                                <img src="cart6.webp" alt="" />
                               <div>
                               <h5>Tea & Cofee</h5>
                                <p className="pp1">From &#2352;50</p>
                                <p className="pp12">Cofee,Tea,Milk Powder</p>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="bused.webp" style={{height:"350px"}} alt="" />
                    </div>
                
                </div>
            </>
        );
    }
}

export default Component4;