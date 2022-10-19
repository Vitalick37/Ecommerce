import React from 'react';
import styles from './App.module.css';
import Header from '@components/Header'
import Footer from '@components/Footer'
import Items from '@components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул черный',
          img: '01.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49',
        },
        {
          id: 2,
          title: 'Стул белый',
          img: '02.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '47',
        },
        {
          id: 3,
          title: 'Стол черный',
          img: '03.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'table',
          price: '149',
        },
        {
          id: 4,
          title: 'Стол белый',
          img: '04.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'table',
          price: '147',
        },
        {
          id: 5,
          title: 'Диван черный',
          img: '05.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'couch',
          price: '249',
        },
        {
          id: 6,
          title: 'Диван белый',
          img: '06.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'couch',
          price: '247',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders}/>
        <Items items = {this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true 
      };  
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item]})
    }
  }
}

export default App;
