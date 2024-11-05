import React, { useState } from 'react';

// Form component for adding a new hog
function HogForm({ addHog }) {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        greased: false,
        weight: '',
        highestMedal: '',
        image: ''
    });

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value // Handle checkbox state separately
        });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct new hog object based on form data
        const newHog = {
            name: formData.name,
            specialty: formData.specialty,
            greased: formData.greased,
            weight: parseFloat(formData.weight), // Ensure weight is a number
            "highest medal achieved": formData.highestMedal,
            image: formData.image
        };
        
        // Call parent function to add the new hog
        addHog(newHog);

        // Reset form fields
        setFormData({
            name: '',
            specialty: '',
            greased: false,
            weight: '',
            highestMedal: '',
            image: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            {/* Input for hog name */}
            <div style={fieldStyles}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Input for hog specialty */}
            <div style={fieldStyles}>
                <label>Specialty</label>
                <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Checkbox for greased status */}
            <div style={fieldStyles}>
                <label>Greased</label>
                <input
                    type="checkbox"
                    name="greased"
                    checked={formData.greased}
                    onChange={handleChange}
                />
            </div>

            {/* Input for hog weight */}
            <div style={fieldStyles}>
                <label>Weight</label>
                <input
                    type="number"
                    name="weight"
                    step="0.1"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Dropdown for highest medal achieved */}
            <div style={fieldStyles}>
                <label>Highest Medal Achieved</label>
                <select
                    name="highestMedal"
                    value={formData.highestMedal}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select medal</option>
                    <option value="wood">Wood</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                    <option value="diamond">Diamond</option>
                </select>
            </div>

            {/* Input for image URL */}
            <div style={fieldStyles}>
                <label>Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Submit button */}
            <button type="submit" style={buttonStyles}>Add Hog</button>
        </form>
    );
}

// Styles for the form
const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
};

// Styles for form fields
const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
};

// Styles for the submit button
const buttonStyles = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default HogForm;