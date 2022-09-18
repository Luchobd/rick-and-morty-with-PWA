import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import Character from "./Character";
import Loading from "./Loading";

function PaintData({ characterName }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Aplicamos esto para crear el buscador
    consumirApi(characterName);
  }, [characterName]);

  const consumirApi = async (name) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
      );
      if (!res.ok) {
        return Swal.fire({
          title: "Error!",
          text: "character not found",
          icon: "error",
          confirmButtonText: "Back",
        });
      }

      const datos = await res.json();
      console.log(datos.results);
      // De esta forma concatenamos los valores anteriores (usar en caso de querer que al buscar nos quede la respuesta de la busqueda anterior) "SOLO USAR ESA LINEA EN CASO DE QUERER CONCATENAR"
      // setCharacters((old) => [...datos.results, ...old]);
      setCharacters(datos.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="row mt-3">
      {characters.map((item) => (
        <Character key={item.id} character={item} />
      ))}
    </div>
  );
}

export default PaintData;
