import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection.js';
import { useTracker } from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch(); // Tracker is a resource from Meteor (a library)
    })

    return (
        <div>
            <h2>Contact List</h2>
            
            {contacts.map(contact => (
                <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
        </div>
    )
}