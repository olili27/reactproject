import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Card from './Card';
import ContactContainer from './ContactContainer'

function Body(){
  return(
    <div>
      <Header/>
      <Card/>
      <ContactContainer/>
    </div>
  )
}

ReactDOM.render(
  <Body/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
