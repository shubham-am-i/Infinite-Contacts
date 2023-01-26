import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'
import Wrapper from '../styles/HomePage'
const Home = ({setIsLoggedIn}) => {
    const [contacts, setContacts] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const {
                data: {results},
            } = await axios(
                `https://randomuser.me/api/?page=${page}&results=8&inc=name,picture,phone`
            )

            setContacts((prev) => [...prev, ...results])
            setLoading(false)
        }

        fetchData()
        return () => {}
    }, [page])

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setPage((prev) => prev + 1)
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Wrapper>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
            <ContactList contacts={contacts} loading={loading} />
        </Wrapper>
    )
}
export default Home
