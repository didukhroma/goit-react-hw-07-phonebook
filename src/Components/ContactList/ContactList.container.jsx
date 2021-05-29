import { connect } from 'react-redux';
import ContactList from './ContactList';

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
})


export default connect(mapStateToProps)(ContactList)