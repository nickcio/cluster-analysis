import './App.css';
import { GlobalStoreContextProvider } from './store'
import AppBanner from './components/AppBanner';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import StateDetails from './components/StateDetails';
import EnsembleDetails from './components/EnsembleDetails';
import DistanceDetails from './components/DistanceDetails';
import ClusterDetails from './components/ClusterDetails'; 

function App() {
  return (
    <div className="App">
      <GlobalStoreContextProvider>
        <Router>
        <AppBanner/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/state/:stateId" element={<StateDetails />}/>
            <Route path="/state/:stateId/ensemble/:ensembleId" element={<EnsembleDetails />}/>
            <Route path="/state/:stateId/ensemble/:ensembleId/cluster/:clusterId" element={<ClusterDetails />}/>
            <Route path="/state/:stateId/ensemble/:ensembleId/distance" element={<DistanceDetails />} />
          </Routes>
        </Router>
      </GlobalStoreContextProvider>
    </div>
  );
}

export default App;
