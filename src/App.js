import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import PaintData from "./components/PaintData.jsx";
import PWA from "./components/PWA";

function App() {
  const [characterName, setCharacterName] = useState("");

  // =================================== localStorage ===============================
  // localStorage para mantener guardado la info de la pagina de forma local.
  useEffect(() => {
    if (localStorage.getItem("apiName")) {
      setCharacterName(JSON.parse(localStorage.getItem("apiName")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("apiName", JSON.stringify(characterName));
  }, [characterName]);
  // =================================================================================
  return (
    <div className="container">
      <h1 className="text-center">Rick and Morty</h1>
      <h2>Hola</h2>
      <Formulario setCharacterName={setCharacterName} />
      <PWA />
      <PaintData characterName={characterName} />
    </div>
  );
}

/*https://rickandmortyapi.com/api/character/?name=rick&status=alive*/

export default App;
