
import { useEffect, useState } from 'react';


function App (){

  ///constantes de estado

  const [countriesList, setCountriesList]= useState ([]);



  ///fecth con useEffect 

  useEffect (()=> {

    fetch ('https://restcountries.com/v3.1/all?fields=name,capital,flag,continents')
    .then((response) => response.json())
    .then((data)=>{
      setCountriesList(data)

    })

  }, [])

  ///pintar 

  const renderCountries = ()=> {
    return countriesList.map ((eachcountry, index)=> ( <li key={index}
    >
      <span> {eachcountry.flag}  </span>
      <h3>{eachcountry.name.common} </h3>
      <h4> {eachcountry.capital} </h4>
      <h4> {eachcountry.continents}  </h4>
    </li> ))
  }





 

  return (
    <div>
      <header>
        <h1>Country Info App</h1>
        <p>Explore information about countries</p>
      </header>

     <section>
     <form>
        <label htmlFor=""> By countries</label>
        <input type="text" />
        <label htmlFor=""> By continents</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
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