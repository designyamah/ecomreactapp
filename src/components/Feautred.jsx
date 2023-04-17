import Book from "./uirepeat/Book";
import { books } from "../data";
function Feautred() {
  console.log(books);

  // function getFiveStarBooks() {
  //   books.filter((book) => book.rating === 5).slice(0, 4);
  // }
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section-title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                // <Book key={books.id} title={books.title} img={books.url} />
                <Book key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feautred;
