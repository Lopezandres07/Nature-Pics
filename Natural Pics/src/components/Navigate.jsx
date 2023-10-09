import { Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <nav className='navbar'>
      <Link to='/'> Home </Link> | <Link to='/Favorites'> Favorites </Link>
    </nav>
  )
}
export default Navigate
