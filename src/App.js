import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Часы МК",
          img: "22150.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 2,
          title: "Часы МК",
          img: "22477.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 3,
          title: "Часы МК",
          img: "22629.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 4,
          title: "Часы МК",
          img: "22658.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 5,
          title: "Часы МК",
          img: "32707.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 6,
          title: "Часы МК",
          img: "24818.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 7,
          title: "Часы МК",
          img: "24838.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 8,
          title: "Часы МК",
          img: "24861.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 9,
          title: "Часы МК",
          img: "24795.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 10,
          title: "Часы МК",
          img: "32698.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 11,
          title: "Часы МК",
          img: "MK2747.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 12,
          title: "Часы МК",
          img: "MK3221.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 13,
          title: "Часы МК",
          img: "MK4556.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 14,
          title: "Часы МК",
          img: "MK6986.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 15,
          title: "Часы МК",
          img: "MK7234.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
      ],
      showFullItem: false,
      fullIten: {}
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullIten}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullIten: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App;
