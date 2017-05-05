import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';


const names = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet",
               "Cupid", "Donner", "Blitzen"];

class Root extends React.Component {

  render(){
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={names} />
      </div>
    );
  }
}




document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Root />, document.getElementById('main'));
});
