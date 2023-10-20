import React from "react";
import { usePokemonContext } from "./pokemon";

const Page2 = () => {
  const pokemonData = usePokemonContext().slice(10, 20);
  console.log(pokemonData);
  return (
    <div className="wrapper">
      <h3 className="mb-4 text-white">List Pokemon | Halaman 2</h3>
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

export default Page2;
