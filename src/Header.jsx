import { Link } from "react-router-dom"
import Nav from "./Nav"

function Header({ setsearchquery }) {
  let darkmode = () => {
    document.body.classList.toggle('toglemode')
  }

  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-badge">E</span>
        <span>eCommerce Hub</span>
      </Link>

      <input
        className="search-input"
        onChange={(e) => setsearchquery(e.target.value)}
        placeholder="Search products..."
        type="search"
      />

      <Nav />

      <button onClick={darkmode} className="theme-toggle" type="button" aria-label="Toggle theme">
        <img src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" />
      </button>
    </header>
  )
}

export default Header
