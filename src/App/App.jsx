import React from 'react';
import styles from './App.module.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Items from '@components/Items';
import Category from '@components/Category';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Category chooseCategory={this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
