import React from "react";

const Navbar = () => {
  return (
    <header className='container'>
      <nav className="navbar navbar-light  navbar-expand-lg navbar-expand-md">
        <a className="navbar-brand animate__pulse animate__repeat-2" href="./">
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-hash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
          </svg>
          <span className="navbar-brand-text">TRUST</span>
        </a>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="./">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="./">
              career
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="./">
              contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
