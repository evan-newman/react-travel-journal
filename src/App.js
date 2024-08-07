import './style/App.css';
import Header from './Components/Header';
import JournalEntry from './Components/JournalEntry';
import data from './data';

function App() {
  const journalEntries = data.map(o => {
      return (
        <JournalEntry
          key={o.id}
          entry={o}
        />
      )
    }
  )

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
