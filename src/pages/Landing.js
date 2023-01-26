// native imports

// external imports
import {useNavigate} from 'react-router-dom'
import lottie from 'lottie-web'

// Local imports
import main from '../assets/images/main.svg'
import Wrapper from '../styles/LandingPage'
import {useEffect} from 'react'

const Landing = ({setIsLoggedIn}) => {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value

        if (name === 'foo' && password === 'bar') {
            setIsLoggedIn(true)
            navigate('/home')
        }
    }

    useEffect(() => {
        function playAnimation() {
            lottie.loadAnimation({
                container: document.getElementById('animation'),
                path: 'hero.json',
                renderer: 'svg',
                loop: true,
                autoplay: true,
            })
        }
        playAnimation()
        console.log('UseEffect ran')
    }, [])

    return (
        <Wrapper>
            <div className='page'>
                <div id='animation' className='animation'></div>
                <div className='info'>
                    <h1>
                        Login to access <span>contacts</span>
                    </h1>
                    <form onSubmit={handleLogin}>
                        <input name='name' placeholder='Username'></input>
                        <br></br>

                        <input name='password' type='password' placeholder='Password'></input>
                        <br></br>

                        <button type='submit' className='btn'>
                            Login
                        </button>
                    </form>
                </div>
                {/* <img src={main} alt='job hunt' className='img main-img' /> */}
            </div>
        </Wrapper>
    )
}

export default Landing
