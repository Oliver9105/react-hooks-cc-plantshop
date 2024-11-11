import React, { useState } from "react";

function PlantCard({ plant, updatePlantPrice, deletePlant }) {
  const [soldOut, setSoldOut] = useState(false);
  const [price, setPrice] = useState(plant.price);

  function handleSoldOutClick() {
    setSoldOut(true);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handlePriceUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(price) }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        updatePlantPrice(updatedPlant);
      });
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => {
      deletePlant(plant.id);
    });
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: $
        <input type="number" value={price} onChange={handlePriceChange} />
      </p>
      <button onClick={handlePriceUpdate}>Update Price</button>
      <button
        onClick={handleSoldOutClick}
        className={soldOut ? "primary" : ""}
        disabled={soldOut}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
