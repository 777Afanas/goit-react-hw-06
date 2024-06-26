import "../../../node_modules/modern-normalize/modern-normalize.css";
// import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

export default function App() { 

  // const [search, setSearch] = useState(""); 
  // const [contacts, setContacts] = useState(initialContacts);

//  const [contacts, setContacts] = useState (() => {
//     const savedValues = window.localStorage.getItem('contacts');
//    if (savedValues !== null) {
//      return JSON.parse(savedValues);
//    } else { return initialContacts }
//   });

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}