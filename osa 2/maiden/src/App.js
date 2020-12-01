import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GetWeatherData from './GetWeatherData'






const App = () => {

    const [ countries, setCountries] = useState([]) 
    const [ filter, setFilter ] = useState('')
    
    
    useEffect(()=>{
        console.log("effect")
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log("promise fulfilled")
            setCountries(response.data)
          })
      }, [])
      console.log("countries:", countries)


      const handleFilter = (event) => {
        console.log("handleFilter",event.target.value)
        setFilter(event.target.value)
        console.log("handleFilter2",filter)
        
      }

        const show = (props) => {
            
            console.log('button clicked',props,countries.filter(country => country.name.toLowerCase().includes(props.toLowerCase())))
            const countryName = countries.filter(country => country.name.toLowerCase().includes(props.toLowerCase()))
            renderCountry(countryName)
            setFilter(countryName[0].name.toLowerCase())
        }

        

        const renderCountry = (props) => {
            console.log("rendering", props)
            return (
                
                props.map( i=> <div key={i.name}><h2 key={i.name}>{i.name}</h2>
                                    <p>capital {i.capital}</p>
                                    <p>population {i.population}</p>
                                    <h2>languages</h2>
                                    <ul>{i.languages.map(language=> <li key={language.name}>{language.name}</li>)}</ul>
                                    <img src={i.flag} width={200} mode='fit' alt ="flag"/>
                                    <GetWeatherData location = {i.capital} />
                                </div>
                    )
               
            )
        }

     


      const RenderNames = () => {
        console.log("filtered", countries.filter(country => country.name.toLowerCase().includes(filter)))
        const filtered = countries.filter(country => country.name.toLowerCase().includes(filter))
            

        if(filtered.length>10){
            return(<p>Too many matches, spesify another filter</p>)
        }

        if(filtered.length<=10 && filtered.length>1){
            return (filtered.map(country => 

                <div>
                    <p key={country.name}>{country.name} </p>
                    <button onClick={()=>show(country.name)}>show</button>
                </div>
            ))//renderöi tän eikä showta??
        }

        if(filtered.length===1){
            console.log("data",renderCountry(filtered))
            
            return (
                
                renderCountry(filtered)
               
            )
        }
            //TODO
    }

      return(
        <div>
        <form >
          <div>
            find countries <input 
              value={filter} 
              onChange={handleFilter}
              />
          </div>         
        </form>
        {RenderNames()}
        </div>
      )
}

export default App