import { IoClose, IoCart, IoMenu } from "react-icons/io5";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

function Nav({ cart }) {
  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        {/* <a href="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </a> */}
        <Link to="/" className="nav__link">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            {/* <a href="" className="nav__link">
              HOME
            </a> */}
            <Link to="/" className="nav__link">
              Homes
            </Link>
          </li>
          <li className="nav__list">
            {/* <a href="" className="nav__link">
              Books
            </a> */}
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <IoMenu />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link" title="cart">
              <IoCart title="cart" />
            </Link>
            {/* <span className="cart__length">{cart.length}</span> */}
            {/* {cart.length === 0 ? null : (
              <span className="cart__length">{cart.length}</span>
            )} */}
            {cart.length > 0 && (
              <span className="cart__length">{cart.length}</span>
            )}
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <IoClose />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
                Home
              </a>
              {/* <Link to="/" className="menu__link">
                Home
              </Link> */}
            </li>
            <li className="menu__list">
              <a href="/books" className="menu__link">
                Books
              </a>
              {/* <Link to="/books" className="menu__link">
                Books
              </Link> */}
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
