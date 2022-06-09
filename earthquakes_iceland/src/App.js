import { useState, useEffect } from 'react';
import Map from './components/Map'
import Loader from './components/Loader'
import { Table } from './components/Table';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [earthquakeData, setHeartquakeData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEarthquakes = async () => {
      setLoading(true)
      const res = await fetch('https://apis.is/earthquake/is')
      const { results } = await res.json()

      setHeartquakeData(results)
      setLoading(false)
    }

    fetchEarthquakes()

    console.log(earthquakeData);
  }, [])
  
  return (
    <div>
      <Header />
      <Table earthquakeData={earthquakeData}/>
      { !loading ? <Map earthquakeData={earthquakeData} /> : <Loader /> }
      <Footer />
    </div>
  );
}

export default App;
