import './style/App.css';
import Header from './Components/Header';
import JournalEntry from './Components/JournalEntry';
import data from './data';

function App() {
  const journalEntries = data.map((o, i, arr) => {
    if (i === arr.length - 1) {
      return (
        <div>
          <JournalEntry
            key={o.id}
            entry={o}
          />
        </div>
      )
    } else {
      return (
        <div>
          <JournalEntry
            key={o.id}
            entry={o}
          />
          <hr className="seperator"/>
        </div>
      )
    }
  })

  return (
    <div className="App">
      <Header />
      <div className="App-entries">
        {journalEntries}
      </div>
    </div>
  );
}

export default App;
