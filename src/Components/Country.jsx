// So the problem statement is that there is a drop-down of  Countries. 
// On selecting any particular country. 
// You have to show another drop down which will have the list of cities of that particular selected country.


import { useState } from "react"

const Country = () =>{
    const countries = [
        {"name":"India","cities":["Delhi","Mumbai","Kolkata"], value:"IN"},
        {"name":"USA","cities":["New York","Los Angeles","Chicago"], value:"US"},
        {"name":"UK","cities":["London","Birmingham","Manchester"], value:"UK"}
    ]
    const [selected , SetSelected] = useState(false);
    const [country , setCountry] = useState('India');
    const [cities , setCities] = useState([]);
    
    const countryHandler= (e) =>{
        setCountry(e.target.value);
        const cityList = countries.filter((country)=> country.value===e.target.value)[0].cities;
        
        setCities([...cityList]);
        SetSelected(true);
        console.log(e.target.value)
    }
    return(
        <div>
            <select value={country} onChange={countryHandler}>
                {countries.map((element) =>{
                    return <option key={element.value} value={element.value}>{element.name}</option>
                })}
            </select>
           {selected &&  <select>
                {cities.map((element) => <option key={element} value={element}>{element}</option>)}
            </select>}
        </div>
    )
}
export default Country