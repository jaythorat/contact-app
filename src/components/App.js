import React, {useState, useEffect} from 'react';
import {uuid} from "uuidv4";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  // console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
  const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  }; 

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContacts);
    console.log(retriveContacts)
  },[]);


  

  return (
    <div className='ui container'>
      <Header />
      <AddContact AddContactHandler = {AddContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}
 
export default App;