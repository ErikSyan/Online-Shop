import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Order from "./components/Order";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items : [
      {
        id : 1,
        tesak: "Աթոռ",
        img: "1200003_PE904809_S5.jpg",
        nkaragrutyun: "Հարմարավետ",
        categories: "Atorner",
        price: "4999"
      },
      {
        id : 2,
        tesak: "Բազմոց",
        img: "055040f03d460d15d5120750929b0d4c.jpg",
        nkaragrutyun: "Հարմարավետ",
        categories: "Bazmocner",
        price: "17999"
      },
      {
        id : 3,
        tesak: "Լամպ",
        img: "Sfc7d8231130244d89e6d9f4285630dc6i.webp",
        nkaragrutyun: "Լավ որակի",
        categories: "Luyser",
        price: "3999"
      }
      ],
      ShowFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.choosCategory = this.choosCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)



  }
  render(){
  return (
    <div className=" wrapper" >
      <Header orders={this.state.orders} onDelete = {this.deleteOrder} />
      <Categories choosCategory={this.choosCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd ={this.addToOrder} />
      {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
  )
}

onShowItem(item){
  this.setState({fullItem : item})
  this.setState({ShowFullItem: !this.state.ShowFullItem})
}

choosCategory(categories){
  if(categories === "all"){
    this.setState({currentItems: this.state.items})
    return
  }

 this.setState({
  currentItems:this.state.items.filter(el => el.categories === categories)
 })
}

deleteOrder(id){
  this.setState({orders : this.state.orders.filter(el => el.id !== id ) })
 
}



addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
  this.setState({ orders: [...this.state.orders, item] }) 
}

}

export default App;
