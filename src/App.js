import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
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

  return (
    <div className="App">

<h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
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
          </tr>
        )
      })} 
      </table>
    </div>
  );
}

export default App;
