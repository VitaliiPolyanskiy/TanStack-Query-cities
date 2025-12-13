import { CitiesList } from './components/CitiesList';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Города Швейцарии</h1>
      <CitiesList />
    </div>
  );
}

export default App;
