import { useState } from "react";
import Book from "../components/uirepeat/Book";
function Books({ books: initialBooks }) {
  //we use a localvariable that is the usestate to store the books array, so that the original array is not changed //we use a localvariable that is the usestate to store the books array, so that the original array is not changed, we change the book prop to initalbook so there is no conflict between state varaible and props
  const [books, setBooks] = useState(initialBooks);

  // console.log(books);
  function filterBooks(sortvalue) {
    console.log(sortvalue);
    if (sortvalue === "LOW_TO_HIGH") {
      //code to sort the books from low to high we use the setter function to change the state varable use slice to make the render changes nd we are cloning the books arras. inorder not to change the ibital value of the book cus sort method changes the array, we use the slice method to make a clone of the original array
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
      //   console.log(books);
    } else if (sortvalue === "HIGH_TO_LOW") {
      //code to sort the books from high to low we use the setter function to change the state varable
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
      //   console.log(books);
    } else if (sortvalue === "RATING") {
      //code to sort the books using rating use the setter function to change the state varable
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
      //   console.log(books);
    }
  }

  return (
    <div className="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(e) => filterBooks(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
