import { Link } from "react-router-dom"
import { LOGIN, SIGNUP } from "../../Router/Paths"


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
        <Link
          to={SIGNUP}
          className='btn btn-ghost text-xl hover:bg-neutral hover:text-secondary'
        >
          signup
        </Link>
      </div>
    </header>
  )
}

export default NavBar