import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Rating from "../components/uirepeat/Rating";
import Price from "../components/uirepeat/Price";
import Book from "../components/uirepeat/Book";
// import { useState } from "react";

function BooksInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  // const [added, setAdded] = useState(false);
  // console.log(book);

  // function  in the bookinfo component to add book to cart
  function addBookToCart(book) {
    // setAdded(true);
    addToCart(book);
  }

  function bookExistOnCart() {
    // ccheck if the exct book is in the cart
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FaArrowLeft />{" "}
                <h2 className="book__selected--title--top book-back">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    booksalePrice={book.salePrice}
                    bookoriginalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam illum dolores, voluptate commodi illo perferendis quo
                    sunt earum autem incidunt ea adipisci voluptatem distinctio,
                    quisquam, consectetur aspernatur. Delectus, aperiam error!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam illum dolores, voluptate commodi illo perferendis quo
                    sunt earum autem incidunt ea adipisci voluptatem distinctio,
                    quisquam, consectetur aspernatur. Delectus, aperiam error!
                  </p>
                </div>
                {/* version 1 */}
                {/* <button className="btn" onClick={() => addToCart(book)}>
                  Add to cart
                </button> */}
                {/* version 2 */}
                {bookExistOnCart() ? (
                  <Link to={"/cart"}>
                    <button className="btn"> Check out </button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book-selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            {/* show recoomended books use filter and mapp that u show books that are the same rating and ensiure u dont show the same book */}
            <div className="books">
              {
                //   console.log(books.filter(book => book.rating === 5 && book.id !== id))
                books
                  .filter(
                    (bookk) =>
                      bookk.rating === book.rating && bookk.id !== Number(id)
                  )
                  .slice(0, 4)
                  .map((book) => (
                    <Book book={book} key={book.id} />
                  ))
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BooksInfo;
