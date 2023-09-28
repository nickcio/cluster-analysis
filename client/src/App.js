import './App.css';
import { GlobalStoreContextProvider } from './store'
import Map from './components/Map';
import AppBanner from './components/AppBanner';
import Menu from './components/Menu';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <GlobalStoreContextProvider>
        <AppBanner/>
        <Body/>
      </GlobalStoreContextProvider>
    </div>
  );
}

export default App;
