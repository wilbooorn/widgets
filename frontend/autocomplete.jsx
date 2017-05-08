import React from "react";

class AutoComplete extends React.Component {
  constructor(props){
    super(props);
    this.state = { inputVal: "" };
  }

  search(){
    
  }


  render(){
    return (
      <div>
        <input onChange = {this.search} type="text" value={this.state.inputVal} placeholder="Search..."></input>
        <ul>

        </ul>
      </div>
    );
  }
}

export default AutoComplete;
