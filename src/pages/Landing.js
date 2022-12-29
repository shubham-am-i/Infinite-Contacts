// native imports
// external imports
import {useNavigate} from 'react-router-dom'

// Local imports
import main from '../assets/images/main.svg'
import Wrapper from '../styles/LandingPage'

const Landing = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value

    if (name === 'foo' && password === 'bar') {
      navigate('/home')
    }
  }
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1>
            scroll your <span>past...</span>
          </h1>
          <form onSubmit={handleLogin}>
            <input name='name' placeholder='Username'></input>
            <br></br>

            <input name='password' type='password' placeholder='Password'></input>
            <br></br>

            <button type='submit' className='btn btn-hero'>
              Login
            </button>
          </form>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
