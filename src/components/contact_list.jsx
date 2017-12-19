import React, { Component } from 'react';
import axios from 'axios'
import Contact from './contact'

class ContactList extends Component{
  constructor(props){
    super(props)
    this.state = {
      contacts:[]
    }
  }

  componentDidMount(){
    let self = this;
    let url = 'http://localhost:8000/contact/'
    axios.get(url)
      .then(function(response){
        self.setState({
          contacts: response.data
        }, () => console.log(self.state))
      })
      .catch(function(error){
        console.log(error);
      })
  }
  readContact(id){
    var contact;
    this.state.contacts.map((c)=>{
      //== when dealing with numbers. === when not.
      if(c.id == id)
      contact = c
    })
    console.log(contact)

  }

  renderContacts(){
    if(this.state.contacts.length > 0 ){
      return this.state.contacts.map((contact)=>{
        return(
          <li key={contact.id}>{contact.first_name} {contact.last_name}<button onClick = {() => this.readContact(contact.id)}> View Contact </button></li>
        )
      })
    }
    return(
      <li>No Contacts</li>
    )
  }

  render(){
    return(
      <div>
        <Contact/>
        <ul>
          {this.renderContacts()}
        </ul>
      </div>
    )
  }
}

export default ContactList
