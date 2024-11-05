import React from 'react'; // Importing React library

// Sort component for selecting sorting options for hogs
const Sort = ({ setSortOption }) => {
  // Event handler for sorting option selection
  const handleSortChange = (e) => {
    setSortOption(e.target.value); // Update the sorting option in the parent component
  };

  return (
    <div>
      <label>
        Sort by: {/* Label for the sorting dropdown */}
        <select onChange={handleSortChange}> {/* Dropdown for sorting options */}
          <option value="">Select...</option> {/* Default option */}
          <option value="name">Name</option> {/* Option to sort by name */}
          <option value="weight">Weight</option> {/* Option to sort by weight */}
        </select>
      </label>
    </div>
  );
};

export default Sort; // Exporting the Sort component for use in other parts of the app