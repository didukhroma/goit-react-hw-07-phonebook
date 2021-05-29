import  { Component } from 'react';
import ContactForm from '../../Components/ContactForm';
import ContactList from '../../Components/ContactList';
import styles from './ContactsPage.module.css';

class ContactsPage extends Component {
    componentDidMount() {
        this.props.fetchAllContacts();
    }
    render() {
        return (
            <section >
                <div className={styles.wrapper}>
                <h1 className={styles.title}>Phonebook</h1>
                <ContactForm/>
                <h2 className={styles.title}>Contacts</h2>
                <ContactList />
                </div>    
            </section>
        );
    }
}

export default ContactsPage;