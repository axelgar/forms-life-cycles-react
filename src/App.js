import React, {Component} from 'react';
import Form from './components/Form';
import CitiesList from './components/CitiesList';
import 'milligram'
import './App.css';

class App extends Component{
  state = {
    cities: [],
    isShowing: true,
  }

  handleAddNewCity = (newCity) => {
    const citiesCopy = [...this.state.cities];
    citiesCopy.push(newCity);
    this.setState({
      cities: citiesCopy,
    })
  }
  render() {
    return (
      <div className="container">
        {this.state.isShowing ? <Form handlePropsNewCity={this.handleAddNewCity}/> : null}
        <CitiesList cities={this.state.cities} />
      </div>
    );
  }
}

export default App;
