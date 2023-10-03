import './App.css';
import { GlobalStoreContextProvider } from './store'
import Map from './components/Map';
import AppBanner from './components/AppBanner';
import Body from './components/Body';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  EnsembleSelection,
  Clusters,
  Menu
} from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStoreContextProvider>
          <AppBanner/>
          <Body/>
          <Routes>
              <Route path="/" exact element={<Menu/>} />
              <Route path="/state" exact  element={<EnsembleSelection/>} />
              <Route path="/state/ensemble" exact  element={<Clusters/>} />
          </Routes>
        </GlobalStoreContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
