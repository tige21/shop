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


function App (){
    const [items, setItems] = useState([
        {
            id: Date.now(),
            name: 'Iphone 12', 
            info: "iphone 12 cool item",
            price: 100000,
          },
          {
            id: Date.now(),
            name: 'Iphone 14', 
            info: "iphone 14 g",
            price: 90000,
          },
          {
            id: Date.now(),
            name: 'Iphone 13', 
            info: "iphone 13 cool item",
            price: 50000,
          }
    ]);
    const [options, setOptions] = useState([
      {value: "name", name: "По названию"},
      {value: "info", name: "По описанию"}
    ],)
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
      
    const Rmover = (obj) => {
        console.log(obj)
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

    handleClick = (name, info, price, buy ) => {
      const mass = items.slice();
      const newObj = {
        id: Date.now(),
        name: name,
        info: info,
        price: price,
        buy: buy
      }
      setItems(newObj)
      
      
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
      setItems([items].sort((a, b) => a[sort].localeCompare(b[sort])))
  
    }



    render(){
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
                items.length !== 0
                  ?
                  <Component1 
                  query = {searchQuery}
                  mass = {items}
                  onItemAdd = {handleClick}
                  onNameInput = {(name) => setName(name)}
                  onInfoInput = {(info) => setInfo(info)}
                  onPriceInput = {(price) => setPrice(price)}
                  onBuyInput = {(buy) => setBuy(buy)}
                  onRemove = {Rmover}
                  />
                  :
                  <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
              }
              
            </div>
      
          );
    }
}


export default App;