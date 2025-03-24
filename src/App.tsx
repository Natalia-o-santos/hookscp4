import "./App.css"
import { Form } from "./components/Form/Form"
import { Sidebar } from "./components/Form/Sidebar/Sidebar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Use State</h1>
        <Form />
        <Sidebar />
      </header>
    </div>
  )
}

export default App

//  btn.addEventListener("click", () => {})
