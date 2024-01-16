import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"
import Loggin from './components/Loggin/Loggin';

function App() {
  return (
    <>
    <Card titulo="Teste" descricao="Props e Hooks"/>
    <Contador/>
    <Task/>
    <Loggin/>
    </>
  )
}

export default App
