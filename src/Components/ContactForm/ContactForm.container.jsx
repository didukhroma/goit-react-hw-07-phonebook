
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact } from '../../redux/contacts/contacts-operations';
const mapStateToProps = (state) => ({
    contacts: state.contacts.items,    
})

const mapDispatchToProps = dispatch => ({
    addContact: (name,number)=>dispatch(addContact(name,number))
    
})
export default connect(mapStateToProps,mapDispatchToProps)(ContactForm)