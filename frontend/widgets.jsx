import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';


const Names = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet",
               "Cupid", "Donner", "Blitzen"];

class Root extends React.Component {

  render(){
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={Names}/>
      </div>
    );
  }
}




document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Root />, document.getElementById('main'));
});
