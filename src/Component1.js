import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css';


const Component1 = (props) => {
    
  return (
          <div>
                <TransitionGroup>
                  {props.mass.filter((obj => obj.name.toLowerCase().includes(props.query.toLowerCase()))).map(obj => {
                    
                    return (<CSSTransition key={obj.id} classNames = 'item' timeout={500}>
                      <div className="container">
                          <div className='item' >
                              
                              <img src="https://static.re-store.ru/upload/resize_cache/iblock/a94/170_170_1/a9455a7234b7089ceb55b6ea3404d86a.jpg"></img>
                              <h1>{obj.name}</h1>
                              <p>{obj.info}</p>
                              <h2>{obj.price}</h2>
                              <a className="link">{obj.buy}</a>
                              <button className="addCart" onClick={() => props.onCart(obj)}>Добавить в корзину</button>
                              <button className="del" onClick = {() => props.onRemove(obj)}
                      ></button>

                              
                          </div>
                          </div>
                          </CSSTransition>)
                      
                  })}
                </TransitionGroup>
          
              
            
              
          </div>
          

          
          
            
        );
    
}

export default Component1;