import {useState} from 'react'
import {FaUserCircle, FaCaretDown} from 'react-icons/fa'
import Wrapper from '../styles/Navbar'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)

  const logoutUser = () => {
    console.log('logout')
  }
  return (
    <Wrapper>
      <div className='nav-center'>
        <div>Contacts</div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {'foo'}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
