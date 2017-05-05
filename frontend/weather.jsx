import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {location: "fetching the weather", weather: "..."};
  }

  componentDidMount() {
    let that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var request = new XMLHttpRequest();
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log(position);
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=ca725e89364ea7153e9be3ffbf1ecfd4`, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var resp = request.responseText;
          resp = JSON.parse(resp);
          let kelvin = resp.main.temp;
          let far = kelvin * (9/5) - 459.67;
          far = Math.round(far * 100) / 100;
          that.setState({location: resp.name, weather: far});
        } else {
          console.log("Error getting the weather");
        }
      };
      request.send();
    });

  }


  render(){
    return(
      <div className = "weather">
        <h1>{this.state.location}</h1>
        <h1>{this.state.weather}{String.fromCharCode(176)}</h1>
      </div>
    );
  }
}
export default Weather;
