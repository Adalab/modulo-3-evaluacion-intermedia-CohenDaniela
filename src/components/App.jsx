
import { useEffect, useState } from 'react';


function App (){

  ///constantes de estado

  const [countriesList, setCountriesList]= useState ([]);
  const [searchConuntries, setSearchCountries] = useState ('');
  const [searchByContinents, setSearchBycontinents] = useState ('All');
  



  ///fecth con useEffect 

  useEffect (()=> {

    fetch ('https://restcountries.com/v3.1/all?fields=name,capital,flag,continents')
    .then((response) => response.json())
    .then((data)=>{
      setCountriesList(data)

    })

  }, [])
  
  ///funciones manejadoras
  const handleform = (ev) => {
    ev.preventDefault

  }

  const hadleInput = (ev) => {
    setSearchCountries(ev.target.value)

  }
  const handleSelectContinent =(ev) => {
    setSearchBycontinents (ev.target.value)
  }


  ///pintar 

  const renderCountries = ()=> {
    return countriesList
    
   
    .filter ((eachcountry)=> eachcountry.name.common.toLowerCase().includes(searchConuntries.toLowerCase()))

    // .filter ((eachcountry)=> 
    // eachcountry.continents.includes(searchByContinents) )

    ///falta condicional para que cuando el select esté en All se muestren todos los paises

    .map ((eachcountry, index)=> ( <li key={index}
    >
      <span> {eachcountry.flag}  </span>
      <h3>{eachcountry.name.common} </h3>
      <h4> {eachcountry.capital} </h4>
      <h4> {eachcountry.continents}  </h4>
    </li> ))
  }



  return (
    <div>
      <header className='header'>
        <h1>Country Info App</h1>
        <p>Explore information about countries</p>
      </header>

     <section>
     <form onSubmit={handleform}>
        <label htmlFor=""> By countries</label>
        <input type="search"
        name='search'
        value={searchConuntries}
        onChange={hadleInput} />
        <label htmlFor=""> By continents</label>
        <select name="continents" 
        id="continents"
        onChange={handleSelectContinent}
        value={searchByContinents}>
          <option value='All'>All</option>
          <option value='Africa'>Africa</option>
          <option>Asia</option>
          <option >Europe</option>
          <option >North America</option>
          <option >Oceania</option>
          <option>South America</option>
        </select>
          
          
         

      </form>
     </section>
     <main>
       <ul> {renderCountries()} </ul> 
     </main>
    </div>





  )



}

export default App;