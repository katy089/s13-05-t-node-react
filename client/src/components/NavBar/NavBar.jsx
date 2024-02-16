import { Link } from "react-router-dom"
import { LOGIN } from "../../Router/Paths"


function NavBar() {
  return (
    <header className="navbar bg-base-100">
        <div className='flex-1'>
        <Link
          to={LOGIN}
          className='btn btn-ghost text-xl hover:bg-neutral hover:text-secondary'
        >
          login
        </Link>
      </div>
    </header>
  )
}

export default NavBar