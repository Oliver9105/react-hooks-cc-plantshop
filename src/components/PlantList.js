import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlantPrice, deletePlant }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          updatePlantPrice={updatePlantPrice}
          deletePlant={deletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
