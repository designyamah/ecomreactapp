import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

function Book({ book }) {
  return (
    <div className="book">
      {/* <div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div> */}
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price
        booksalePrice={book.salePrice}
        bookoriginalPrice={book.originalPrice}
      />
    </div>
  );
}

export default Book;
