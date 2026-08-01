
import { Link } from "react-router-dom"
function Nav() {
  return (
    <>
    <nav style={{ display:"flex",
      gap:"20px"
    }}>
      <Link to={'/'}>Home</Link>
      <Link   to={'/register'}>Signup</Link>
      <Link  to={'/about'}>About</Link>
      <Link   to={'/foods'}>restarants</Link>
      <Link    to={'/products'}>Products</Link>
      </nav>
    </>
  )
}

export default Nav