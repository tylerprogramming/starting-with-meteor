import React, {useState} from 'react';
import { ContactsCollection } from '../api/ContactsCollection.js';

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageURL, setImageURL] = useState("");

    const saveContact = () => {
        console.log({name, email, imageURL});
        ContactsCollection.insert({name, email, imageURL});

        setName("");
        setEmail("");
        setImageURL("");
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input value={name} id="name" onChange={(e) => setName(e.target.value)} type="text" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input value={email} id="email" onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>

            <div>
                <label htmlFor="imageURL">Image URL</label>
                <input value={imageURL} id="imageURL" onChange={(e) => setImageURL(e.target.value)} type="text" />
            </div>

            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}