import './App.css';
import contacts from './contacts.json';



function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td><img width={100} src={contacts[0].pictureUrl} alt="" ></img> </td>
          <td>{contacts[0].name}</td>
          <td>{contacts[0].popularity}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[1].pictureUrl} alt=""></img> </td>
          <td>{contacts[1].name}</td>
          <td>{contacts[1].popularity}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[2].pictureUrl} alt=""></img> </td>
          <td>{contacts[2].name}</td>
          <td>{contacts[2].popularity}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[3].pictureUrl} alt=""></img> </td>
          <td>{contacts[3].name}</td>
          <td>{contacts[3].popularity}</td>
        </tr>
        <tr>
          <td><img width={100} src={contacts[4].pictureUrl} alt=""></img> </td>
          <td>{contacts[4].name}</td>
          <td>{contacts[4].popularity}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
