import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="box">
        <div id="logo">
          <img
            id="brain"
            src="https://media.istockphoto.com/id/1297460438/vector/funny-comic-cartoon-brain-character-with-magnifier.jpg?s=612x612&w=0&k=20&c=gbQswIYSDpCOpdnbp9nkTHczmer0rNAINOIeZoHx7zM="
            alt="brain_image"
          />
        </div>
        <div id="container">
          <h2 id="title">
            <strong>Take the TD Challenge: Assessment and diagnosis</strong>
          </h2>
          <p className="description" id="desOne">
          Can you differentiate tardive dyskinesia from drug-induced parkinsonism and other acute 
          </p>
          <p className="description" id="desTwo">drug-induced movement disorders?<b>Put your knowledge to the test.</b></p>
        </div>
        <button id="start"><b>GET STARTED</b></button>
      </div>
    </div>
  );
}

export default App;
