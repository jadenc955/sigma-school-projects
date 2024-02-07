const busStopIdInput = document.getElementById("busStopId");
const arrivalInfo = document.getElementById("arrivalInfo");

async function fetchBusArrival(busStopId) {
  const response = await fetch(`https://2t8td6-8080.csb.app/?id=${busStopId}`);
  if (response.ok) {
    const data = await response.json();
    return data
  } else {
    throw new Error("Error fetching bus arrival data");
  }
}

function formatArrivalData(arrivalData) {
  const buses = arrivalData.services;
  const formattedData = [];

  for (const bus of buses) {
    let arrivalTimeString = `${bus.next_bus_mins} min(s)`;

    if (bus.next_bus_mins <= 0) {
      arrivalTimeString = 'Arriving'
    }
    
    formattedData.push(`<div>
                          <strong>Bus ${bus.bus_no}</strong>: ${arrivalTimeString}
                        </div>`)
  }
  formattedData.push(`<div>
    <strong>${buses.length} buses</strong>
  </div>`)
  return formattedData.join(" ");
}

function displayBusArrival(busStopId) {
  arrivalInfo.innerHTML = "Loading...";
  fetchBusArrival(busStopId)
    .then((arrivalData) => {
      const formattedArrivalData = formatArrivalData(arrivalData);
      arrivalInfo.innerHTML = formattedArrivalData;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
}

function getBusTiming() {
  const busStopId = busStopIdInput.value;
  displayBusArrival(busStopId);
  setInterval(() => {
    displayBusArrival(busStopId);
  }, 5000)
  
}