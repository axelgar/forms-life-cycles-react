import React from 'react'

function CitiesList(props) {
  return (
    <section>
      <h2>List of my visitied cities</h2>
        {props.cities.length > 0 ? props.cities.map((city, index) => {
          return (
            <article key={index}>
              <h3>{city.cityName}</h3>
              <p>The population is: {city.population}</p>
              <p>The area is: {city.area}</p>
            </article>
          )
        }) : <p>No visited cities</p>}
    </section>
  )
}

export default  CitiesList;
