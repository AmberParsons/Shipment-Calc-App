import { useState } from 'react';
import './App.css';



function App() {
  const [shipmentWeight, setShipmentWeight] = useState();
  const [shipmentMethod, setShipmentMethod] = useState();
  const [senderAddressLine1, setSenderAddressLine1] = useState();
  const [senderAddressPostcode, setSenderAddressPostcode] = useState();
  const [receiverAddressLine1, setReceiverAddressLine1] = useState();
  const [receiverAddressPostcode, setReceiverAddressPostcode] = useState();
  const [shipmentDate, setShipmentDate] = useState();
  const [shipmentCosts, setShipmentCosts] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const request = {
      shipmentWeight: Number(shipmentWeight),
      shipmentMethod,
      senderLocation: { line1: senderAddressLine1, postcode: senderAddressPostcode},
      receiverLocation: { line1: receiverAddressLine1, postcode: receiverAddressPostcode},
      date: shipmentDate
    }
    const response = await fetch('http://localhost:3001/shipping-costs', 
      { 
        method: "POST",     
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(request)
      }
    );

    const responseJSON = await response.json();
    setShipmentCosts(responseJSON);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input id="shipmentWeight" type="text" placeholder='Shipment Weight' onChange={(e) => setShipmentWeight(e.target.value)}/>
          <input id="shipmentMethod" type="text" placeholder='Shipment Method' onChange={(e) => setShipmentMethod(e.target.value)}/>
          <input id="senderAddressLine1" type="text" placeholder='Sender Address line 1' onChange={(e) => setSenderAddressLine1(e.target.value)}/>
          <input id="senderAddressPostcode" type="text" placeholder='Sender Address Postcode' onChange={(e) => setSenderAddressPostcode(e.target.value)}/>
          <input id="receiverAddressLine1" type="text" placeholder='Receiver Address line 1'onChange={(e) => setReceiverAddressLine1(e.target.value)}/>
          <input id="receiverAddressPostcode" type="text" placeholder='Receiver Address Postcode'onChange={(e) => setReceiverAddressPostcode(e.target.value)}/>
          <input id="shipmentDate" type="text" placeholder='Shipment Date YYYY-MM-DD'onChange={(e) => setShipmentDate(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
        {shipmentCosts && <textarea
        name="postContent"
        defaultValue={JSON.stringify(shipmentCosts)}
        rows={4}
        cols={40}
      />}
      </header>
    </div>
  );
}

export default App;
