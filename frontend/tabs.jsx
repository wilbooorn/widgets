import React from 'react'

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = { selected: 0}

    this.setTab = this.setTab.bind(this);
  }

  setTab(e){
    e.preventDefault();
    this.setState({selected: e.target.value})
  }

  render(){
    return(
      <div className = "tab-widget">
        <header className = "all-tabs">
          <ul className ="titles">
            {
              Object.keys(this.props.tabs).map((num, idx) => <li onClick = {this.setTab} value = {idx} key={idx}>{this.props.tabs[num].title}</li>)
            }
          </ul>
        </header>
        <article>
          <h1>
            {this.props.tabs[this.state.selected].content}
          </h1>
        </article>
      </div>
    );
  }
}

export default Tabs;
