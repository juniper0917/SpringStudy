import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Spring API test
        <button
          className="apitest"
          onClick={() => {
            fetch("http://localhost:8080/controller?id=test&pw=testpw")
              .then((response) => {
                return response.text();
              })
              .then((response) => {
                alert(response);
                console.log(response);
              });
          }}
        >
          fetch
        </button>
      </header>
    </div>
  );
}

export default App;
