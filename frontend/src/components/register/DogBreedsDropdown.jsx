import React, { useEffect, useState } from "react";

function DogBreedsDropdown({ setUserApm, userApm }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const capitalizeFirstLetter = (breed) => {
    return breed.charAt(0).toUpperCase() + breed.slice(1);
  };

  return (
    <div class="col-sm-12">
      <label for="text" class="form-label">
        Dog Type <span class="text-muted">(Required)</span>
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
        <option value="">Select a Dog Breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {capitalizeFirstLetter(breed)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DogBreedsDropdown;
