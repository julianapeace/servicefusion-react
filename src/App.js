import React, { Component } from 'react';
import './App.css';
import ContactList from './containers/contact_list'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar title="My Appbar" height={"20vh"}/>
          <ContactList/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
