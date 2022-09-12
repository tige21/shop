import './App.css';
import React, { Component } from "react"
import Component1 from './Component1';
import Head from './Head';
import Form from './Form';
import MySelect from './MySelect';
import MyInput from './MyInput';
import MyModal from './MyModal';
import MyButton from './components/MyButton';
import { useState } from "react";
import Loader from './components/Loader';
import Cart from "./components/Cart"

function App (){
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Iphone 12', 
            info: "iphone 12 cool item",
            price: 100000,
          },
          {
            id: 2,
            name: 'Iphone 14', 
            info: "iphone 14 g",
            price: 90000,
          },
          {
            id: 3,
            name: 'Iphone 13', 
            info: "iphone 13 cool item",
            price: 50000,
          }
    ]);
    const [options, setOptions] = useState([
      {value: "name", name: "По названию"},
      {value: "info", name: "По описанию"}
    ],)
    const [priceCart, setPriceCart] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [itemsCart, setItemsCart] = useState([])
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
    const [price, setPrice] = useState('')
    const [buy, setBuy] = useState('')
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [modal, setModal] = useState(false)

    // const remover = (obj) => {
    //     const mass = items.slice();
    //     const number = mass.indexOf(obj)
    //     delete mass[number]
    //     this.setState({items: mass})
    
    //   }

    // const getSortedItems = (selectedSort) => {
    //   if(selectedSort){
    //     return setItems([...this.state.items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])))
  
    //   }
    //   return items
    // }

    const minus = (obj) =>{
      const mas = [...itemsCart]
      const index = mas.indexOf(obj)
      const objFound = mas[index]
      objFound.count--
      const pr = objFound.price
      const mas1 = [...priceCart]
      const indexPr = mas1.indexOf(pr)

      delete mas1[indexPr]
      setPriceCart(mas1)
      console.log(mas1)

    }

    const plus = (obj) =>{
        const mas = [...itemsCart]
        const index = mas.indexOf(obj)
        mas[index].count++
        const pr = mas[index].price
        setPriceCart([...priceCart, pr])
      
    }

    const addToCart = (obj) =>{
      const objCopy = Object.assign({}, obj)
      const keks = objCopy.id
      const mas = [...itemsCart]
      function FilterCart(elem){
        return elem.id === keks;
      }
      const objFound = itemsCart.find(FilterCart)
      if (!objFound){
        objCopy.count = 1
        setPriceCart([...priceCart, objCopy.price])

        setItemsCart([...itemsCart, objCopy])
        

      } else {
        const index = itemsCart.indexOf(objFound)
        mas[index].count++;
        setPriceCart([...priceCart, mas[index].price])
        setItemsCart(mas)
        
      }
      console.log(priceCart)

    }

    const Rmover = (obj) => {
        const mass = items.slice();
        setItems(mass.filter(m => m.id !== obj.id))
      }

    const hendleClick = (e) => {
        e.preventDefault()
        const mass = items.slice();
        const newObj = {
            id: Date.now(),
            name: name,
            info: info,
            price: price,
            buy: buy,

        }
        setItems([...mass, newObj])
      }

    const handleClick = (e) => {
      e.preventDefault()
      
      const newObj = {
        id: Date.now(),
        name: name,
        info: info,
        price: price,
        buy: buy
      }
      setItems([...items, newObj])
      
      
    }

    const search = (query) => {
        setSearchQuery(query)
      
    }

    const setModalWindow = () => {
      if (modal){
        setModal(false)
    
      } else {
        setModal(true)
      }
    
    }

    const setSelect = (sort) => {
      
      setSelectedSort(sort)
      setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])))
    
    }
  
    return (
            <div>
              <header className='header'>
                <Head/>
              </header>
              
              <MyButton
                onModal = {setModal}
                defaultValue = 'Добавить пользователя'
              />
              <MyModal visible={modal} setVisible = {setModalWindow}>
                <Form
                  onItemAdd = {handleClick}
                  onNameInput = {(name) => setName(name)}
                  onInfoInput = {(info) => setInfo(info)}
                  onPriceInput = {(price) => setPrice(price)}
                  onBuyInput = {(buy) => setBuy(buy)}
                />
              </MyModal>
      
              
              <hr style = {{margin: "30px 0"}}/>
      
              <MyInput
                placeholder = "Поиск"
                value = {searchQuery}
                onChange = {(e) => search(e.target.value)}
                
              />
      
              <MySelect 
                startValue = "Выберите способ сотрировки"
                options = {options}
                value = {selectedSort}
                changeSelect = {setSelect}
              />
      
              <hr style = {{margin: "30px 0"}}/>
              {
              
              <Cart
                mas = {itemsCart}
                price = {priceCart}
                plus = {plus}
                minus = {minus}
                />
            
              }
              <hr style = {{margin: "30px 0"}}/>
              {
                items.length 
                  ?
                  
                  <Component1 
                  
                    query = {searchQuery}
                    mass = {items}
                    onItemAdd = {(e) => handleClick(e)}
                  
                    onRemove = {Rmover}
                    onCart = {addToCart}
                  />
                  :
                  <Loader/>
              }
              
            </div>
      
          );
            }




export default App;