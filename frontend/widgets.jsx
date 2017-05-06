import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Tabs from './tabs';


const names = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet",
               "Cupid", "Donner", "Blitzen"];

const tabs = [ { title: "one", content: "First Tab" },
                { title: "two",  content: "Second Tab" },
                { title: "three", content: "Third Tab" }];

class Root extends React.Component {

  render(){
    return (
      <div>
        <Clock />
        <Weather />
        <div className = "small">
          <AutoComplete names={names} />
          <Tabs tabs={tabs} />
        </div>
      </div>
    );
  }
}




document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Root />, document.getElementById('main'));
});
