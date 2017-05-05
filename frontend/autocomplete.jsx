import React from "react";

class AutoComplete extends React.Component {
  constructor(props){
    super(props);
    this.state = { inputVal: "", names: this.props.names};

    this.search = this.search.bind(this);
    this.set = this.set.bind(this);
    this.updateNames = this.updateNames.bind(this);
  }

  updateNames(){
    let newNames = this.props.names.filter((name) => {
      return name.startsWith(this.state.inputVal);
    })
    this.setState({ names: newNames });
  }

  search(e){
    e.preventDefault();
    let input = document.getElementById("search").value;
    this.setState({ inputVal: input }, this.updateNames);

  }

  set(e){
    e.preventDefault();
    this.setState({ inputVal: e.target.innerHTML })
  }


  render(){
    return (
      <div className = "auto">
        <input onChange = {this.search} type="text" id="search" value={this.state.inputVal} placeholder="Search..."></input>
        <ul>
          {
            this.state.names.map((name, idx) => <li onClick = {this.set} key={idx}>{name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
