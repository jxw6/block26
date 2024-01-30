import { useEffect, useState } from 'react'

const API = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/"

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        async function getContact() {
            try {
                const response = await fetch(API + "users/" + selectedContactId)
                const result = await response.json()
                setContact(result)
            } catch (error) {
                console.error(error)
            }
        }
        getContact()
    }, [])

    return (
        <>
        {contact && <div>
            <p>Name: {contact.name}</p>
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>Street: {contact.address.street}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>
            <p>Company: {contact.company.name}</p>
            <button onClick={() => setSelectedContactId(null)}>Contact List</button>
        </div>}
        </>
    )
}

export default SelectedContact