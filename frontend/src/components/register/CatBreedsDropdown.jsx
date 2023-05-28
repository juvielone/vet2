import React, { useEffect, useState } from "react";

function CatBreedsDropdown({ setUserApm, userApm }) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => {
        const breedList = data.map((breed) => breed.name);
        setBreeds(breedList);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div class="col-sm-12">
      <label for="petBreed" class="form-label">
        Pet Breed
      </label>
      <select
        class="form-select"
        value={userApm.breed}
        onChange={(e) =>
          setUserApm({
            ...userApm,
            breed: e.target.value,
          })
        }
      >
        <option value="">Select a Cat breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CatBreedsDropdown;
