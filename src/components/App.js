import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Cards from "./Cards";
import Sort from "./Sort";
import Filter from "./Filter";
import HogForm from "./Form"; // Component for adding a new hog

function App() {
  // State declarations
  const [hogsData, setHogsData] = useState(hogs); // Stores the hog data
  const [sortOption, setSortOption] = useState(''); // Tracks the current sorting option
  const [showGreased, setShowGreased] = useState(false); // Controls whether only greased hogs are shown

  // Filtered list of hogs based on the greased status
  const getFilteredHogs = () => {
    return showGreased ? hogsData.filter(hog => hog.greased) : hogsData;
  };

  // Sorted and filtered list of hogs
  const getSortedHogs = () => {
    const filteredHogs = getFilteredHogs();
    return filteredHogs.sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name); // Sort by name alphabetically
      } else if (sortOption === 'weight') {
        return b.weight - a.weight; // Sort by weight in descending order
      }
      return 0; // No sorting applied
    });
  };

  // Function to add a new hog
  const addHog = (newHog) => {
    setHogsData([...hogsData, newHog]);
  };

  return (
    <div className="App">
      {/* Components for app UI */}
      <Nav />
      <Filter setShowGreased={setShowGreased} />
      <Sort setSortOption={setSortOption} />
      <HogForm addHog={addHog} />

      {/* Render hog cards */}
      {getSortedHogs().map((hog) => (
        <Cards
          key={hog.name} // Use a unique identifier if available
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog.weight}
          highest={hog["highest medal achieved"]}
          image={hog.image}
        />
      ))}
    </div>
  );
}

export default App;