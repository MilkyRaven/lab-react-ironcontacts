import './App.css';
import contacts from './contacts.json';

function App() {
  //console.log(contacts)
  return (
    <div className="App">
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
        <tr>
          <td><img width={100} src={contacts[0].pictureUrl} alt="" ></img> </td>
          <td>{contacts[0].name}</td>
          <td>{contacts[0].popularity}</td>
          <td>{contacts[0].wonOscar ? "🏆" : "no"}</td>
          <td>{contacts[0].wonEmmy ? "🏆" : "no"}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[1].pictureUrl} alt=""></img> </td>
          <td>{contacts[1].name}</td>
          <td>{contacts[1].popularity}</td>
          <td>{contacts[1].wonOscar ? "🏆" : "no"}</td>
          <td>{contacts[1].wonEmmy ? "🏆" : "no"}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[2].pictureUrl} alt=""></img> </td>
          <td>{contacts[2].name}</td>
          <td>{contacts[2].popularity}</td>
          <td>{contacts[2].wonOscar ? "🏆" : "no"}</td>
          <td>{contacts[2].wonEmmy ? "🏆" : "no"}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[3].pictureUrl} alt=""></img> </td>
          <td>{contacts[3].name}</td>
          <td>{contacts[3].popularity}</td>
          <td>{contacts[3].wonOscar ? "🏆" : "no"}</td>
          <td>{contacts[3].wonEmmy ? "🏆" : "no"}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[4].pictureUrl} alt=""></img> </td>
          <td>{contacts[4].name}</td>
          <td>{contacts[4].popularity}</td>
          <td>{contacts[4].wonOscar ? "🏆" : "no"}</td>
          <td>{contacts[4].wonEmmy ? "🏆" : "no"}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
