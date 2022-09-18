import React from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";

function Formulario({ setCharacterName }) {
  const [inputs, handleChange, reset] = useForm({
    name: "",
  });

  const { name } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    if (!name.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "input empty, write something plase",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    // De esta forma estamos eliminando los espacios y ademas obligamos a que todos los valores del input esten en minuscula.
    setCharacterName(name.trim().toLowerCase());

    reset();
  };

  // console.log(inputs);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese personaje"
        className="form-control mb-2"
        value={name}
        onChange={handleChange}
        name="name"
      />
      <button type="submit" className="btn btn-dark">
        Search
      </button>
    </form>
  );
}

export default Formulario;
