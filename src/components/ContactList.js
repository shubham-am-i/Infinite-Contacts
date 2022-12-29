import Wrapper from '../styles/ContactList'

const ContactList = ({contacts}) => {
  return (
    <Wrapper>
      {contacts.map((contact, i) => (
        <div key={i} className='container'>
          <img src={contact.picture.large} alt='avatar' />
          <div>
            <span>{contact.name.first}</span> <span>{contact.name.last}</span>
            <p>{contact.phone}</p>
          </div>
        </div>
      ))}
    </Wrapper>
  )
}
export default ContactList
