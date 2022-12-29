import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'
import Wrapper from '../styles/HomePage'
const Home = () => {
  const [contacts, setContacts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const {
        data: {results},
      } = await axios(`https://randomuser.me/api/?page=${page}&results=7&inc=name,picture,phone`)
      console.log(results)

      setContacts((prev) => [...prev, ...results])
      setLoading(false)
    }

    fetchData()
    return () => {}
  }, [page])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
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
      <Navbar />
      <ContactList contacts={contacts} />
      {loading && <img src='spinner.svg' alt='spinner' />}
    </Wrapper>
  )
}
export default Home
