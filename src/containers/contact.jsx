import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateContact, deleteContact } from '../actions/index'

class Contact extends Component{
  render(){
    return(
      <div>Contact</div>
    )
  }
}

function mapStateToProps(state){
  // maps info coming in
  contact: state.contact
}

function mapDispatchToProps(dispatch){
  // maps info going out
  return bindActionCreators({
    updateContact:updateContact,
    deleteContact:deleteContact
    }, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(Contact)
