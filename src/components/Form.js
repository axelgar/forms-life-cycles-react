import React, { Component } from 'react'


class Form extends Component {
  state = {
    cityName: '',
    population: '',
    area: '',
  }


  componentDidMount() {
    console.log('VacaMount');
  }

  componentDidUpdate() {
    console.log('VacaUpdate');
  }

  componentWillUnmount() {
    console.log('vacaUnmount');
  }


  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {cityName, population, area} = this.state;
    const newCity = {cityName, population, area};
    this.props.handlePropsNewCity(newCity)
    this.setState({
      cityName: '',
      population: '',
      area: '',
    })
  }

  render() {
    console.log('VacaRender')
    const {cityName, population, area} = this.state;
    return (
      <>
        <h2>Cool Form</h2>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input 
            id ='name' 
            type='text' 
            name='cityName' 
            placeholder='Write your city name' 
            value={cityName}
            onChange={this.handleInputChange}/>

          <label htmlFor='population'>Population</label>
          <input 
            id ='population' 
            type='number' 
            name='population' 
            placeholder='120..' 
            value={population}
            onChange={this.handleInputChange}/>

          <label htmlFor='area'>Area</label>
          <input 
            id='area' 
            type='number' 
            name='area' 
            placeholder='3..' 
            value={area}
            onChange={this.handleInputChange}/>

          <button>Add new city</button>
        </form>
      </>
    )
  }
}

export default Form;
