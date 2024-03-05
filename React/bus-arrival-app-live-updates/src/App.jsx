import { useState, useEffect } from 'react';

function BusArrivalTimes({ arrivalInfo }) {
  return (
    <>
      <h1>Bus Stop {arrivalInfo.bus_stop_id}</h1>
      <ul>
        {arrivalInfo.services.map((arrival, index) => (
          <li key={index}>
            Bus {arrival.bus_no} arriving in {arrival.next_bus_mins} minutes
          </li>
        ))}
      </ul>
    </>
  )
}

export default function App() {
  const [busID, setBusID] = useState("");
  const [arrivalInfo, setArrivalInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchArrivalData = async (id) => {
    const response = await fetch(`https://sg-bus-arrivals-sigma-schoolsc1.replit.app/?id=${id}`);
    const data = await response.json();
    setArrivalInfo(data);
  }

  useEffect(() => {
    if (busID) {
      setLoading(true);
      fetchArrivalData(busID)
      .finally(() => setLoading(false));
      const timerId = setInterval(() => {
        console.log('fetching bus data');
        setLoading(true);
        fetchArrivalData(busID)
        .finally(() => setLoading(false));
      }, 5000); //Refreshes every 5 seconds

      //Cleanup function to clear the interval
      return () => clearInterval(timerId);
    }
  }, [busID]);

  function updateBusID(event) {
    setBusID(event.target.value);
  }

  return (
    <div>
      <h1>Bus Arrival App</h1>
      <select onChange={updateBusID}>
        <option value="">Select Bus Stop ID</option>
        <option value="18131">18131</option>
        <option value="18141">18141</option>
      </select>
      {loading && <p>Loading...</p>}
      {arrivalInfo && <BusArrivalTimes arrivalInfo={arrivalInfo}/>}
    </div>
  )
}
