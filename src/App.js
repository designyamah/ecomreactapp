import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Books from "./pages/Books";
import BooksInfo from "./pages/BooksInfo";
import { books } from "./data";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";



function App() {
  const [cart,setCart] = useState([])
  // we need multiple functions to update the cart
  // function addToCart(){
  //   console.log('yes')
  // }
  // version one
  // the book parameter is an object of the current book addeed to cart, which comes from the bookinfo
  // const addToCart = (book) => {
  //   // check for dupliacte cart items(we can increament the quantity)
  //   const duplicateitem = cart.find(item => +item.id === +book.id)
  //   // setcart([...cart,book])
  //   if(duplicateitem){
  //     // updaete duplicte cart item quantity else return the item(book)
  //     setcart(cart.map(item => item.id === duplicateitem.id ? {...item,quantity:item.quantity + 1} : item))
  //   }
  //   else{
  //     setcart([...cart,{...book,quantity:1}])
  //   } 
  // }
  // version 2
  const addToCart = (book) => {
      // setCart([...cart,book])
      // add qauntity to the book object
      setCart([...cart,{...book, quantity:1}])

  }

const updateCartQuantity=(bookcartitem,cartquantity) => {
    console.log(bookcartitem,cartquantity)
    setCart(cart.map(item => item.id === bookcartitem.id ? {...item,quantity: +cartquantity} : item))
}
// git init git add. git commit -m "first commit" git push )

const removeItem = (bookcartitem) => {
  setCart(cart.filter(book => book.id !== bookcartitem.id ))
}

// useeffect hook to see the value of the casrt
  useEffect(() => {
    console.log(cart)
  }, [cart])







  return (
     <Router>
      <>
        <Nav cart={cart}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            {/* dynamic id */}
            <Route path="/books/:id" element={<BooksInfo books={books}  addToCart={addToCart} cart={cart}/>} />
            <Route path="/cart" element={<Cart books={books} cart={cart}  updateCartQuantity={updateCartQuantity} removeItem={removeItem}/>} />
        </Routes>
        <Footer />
      </>
     </Router>

     
  );
}

export default App;
