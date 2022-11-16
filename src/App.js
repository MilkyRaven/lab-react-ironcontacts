import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  console.log()
  const firstFive = contacts.slice(0, 5);
  const theOthers = contacts.slice(5)
  const [contactsList, setContactList] = useState(firstFive)
  // console.log(contactsList) 
const addRandom = ()=>{
  let randomCeleb = theOthers[Math.floor(Math.random()* theOthers.length)]
  const allCebs= [...contactsList];
  allCebs.unshift(randomCeleb);
  console.log(allCebs);
  setContactList(allCebs)
}
  const sortPopularity = ()=>{
    const allCebs = [...contactsList]
    allCebs.sort((a, b) => {
      if (a.popularity > b.popularity){
        return -1;
      }
      if (a.popularity < b.popularity){
        return 1;
      }
      return 0
    })
    setContactList(allCebs)
  }
  const sortName = () =>{
    const allCebs = [...contactsList]
    allCebs.sort((a, b) => {
      if (a.name < b.name){
        return -1;
      }
      if (a.name > b.name){
        return 1;
      }
      return 0
    })
    setContactList(allCebs)
  }

  const deleteCeb = (cebId)=>{
    const allCebs= [...contactsList];
    allCebs.filter((ceb)=>{
      return ceb._id !== cebId
    })
  }

  return (
    <div className="App">

<h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>
<table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
      {contactsList.map((celeb)=> {
        return (
          <tr key={celeb.id}>
          <td><img width={100} src={celeb.pictureUrl} alt="" ></img> </td>
          <td>{celeb.name}</td>
          <td>{celeb.popularity}</td>
          <td>{celeb.wonOscar ? "🏆" : null}</td>
          <td>{celeb.wonEmmy ? "🏆" : null}</td>
          <td> <button onClick={()=> deleteCeb(celeb._id)}> </button> </td>
          </tr>
        )
      })} 
      </table>
    </div>
  );
}

export default App;
