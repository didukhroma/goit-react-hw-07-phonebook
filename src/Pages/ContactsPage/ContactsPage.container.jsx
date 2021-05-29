import { connect } from 'react-redux';
import ContactsPage from './ContactsPage';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
})
const mapDispatchToProps = dispatch => ({
    fetchAllContacts: ()=>dispatch(fetchContacts())
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactsPage)