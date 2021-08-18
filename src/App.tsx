//import { TiposBasicos } from './typescript/TiposBasicos';
//import { ObjectosLiterales } from './typescript/ObjectosLiterales'
//import { Funciones } from './typescript/Funciones'
//import { Contador } from "./components/Contador"
import { ContadorConHook } from './components/ContadorConHook';
import { Login } from "./components/Login"
import { Usuarios } from "./components/Usuarios"

import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Profundizando TS - React</h1>
      <hr />
      { /* <TiposBasicos /> */ }
      { /* <ObjectosLiterales /> */ }
      { /* <Funciones /> */ }
      {/* <Contador /> */ }
      <ContadorConHook />
      <Login />
      <Usuarios />
      <Formularios />
    </div>
  )
}

export default App