import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Cart.css"
import Loader from "./Loader";


const Cart = (props) => {
    
    return(
        <div>
            <h1 className="title">Корзина</h1>
            <div className="container-cart">
                
                <h3 className="price-tag">{props.price.reduce((previousValue, currentValue) => previousValue + currentValue, 0)}₽
                </h3>
                {props.mas.map(objC => {
                    return (
                    
                    // <CSSTransition key={objC.id} timeout={500} classNames='itemCart'>
                           <div className="itemC" key={objC.id}>
                                <div>
                                    <img className="img" src="https://static.re-store.ru/upload/resize_cache/iblock/a94/170_170_1/a9455a7234b7089ceb55b6ea3404d86a.jpg"></img>
                                </div>
                                <div>
                                    <h1>{objC.name}</h1>
                                    <p>{objC.info}</p>  
                                </div>
                                <div><h3>{objC.price}</h3></div>
                                <div className="counter-wrap">
                                    <button className="minus" onClick={() => props.minus(objC)}></button>
                                    <input className="counter" value={objC.count}></input>
                                    <button className="plus" onClick={() => props.plus(objC)}></button>
                                </div>
                                                        
                            </div>
                            // </CSSTransition>
                    );

                })

                }
           
           </div>
        </div>


    );

}


export default Cart;