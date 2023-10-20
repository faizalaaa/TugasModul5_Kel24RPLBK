import React from "react";
import { usePokemonContext } from "./pokemon";
import "bootstrap/dist/css/bootstrap.css";
const Page1 = () => {
  const pokemonData = usePokemonContext().slice(0, 10);
  return (
    <div className="wrapper">
      <h3 className="mb-4 text-white">List Pokemon | Halaman 1</h3>
      <div className="card text-white bg-dark" style={{ width: "18rem" }}>
        <div className="card-header text-center">Pokemon Name</div>
        <ul>
          {pokemonData.map((pokemonName, index) => (
            <li key={index}>{pokemonName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page1;
