import React, { useState } from "react";

// Component for rendering individual cards with hog details and interactions
function Cards({ name, specialty, greased, weight, highest, image }) {
    // State declarations
    const [showDetails, setShowDetails] = useState(false); // Toggle visibility of card details
    const [comments, setComments] = useState([]); // Stores user comments
    const [newComment, setNewComment] = useState(""); // Holds the current comment input
    const [likes, setLikes] = useState(0); // Tracks the number of likes
    const [hidden, setHidden] = useState(false); // Manages hiding the card

    // Toggle the display of card details
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    // Update new comment input state
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    // Add a new comment to the comments array
    const handleAddComment = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment(""); // Clear input after adding
        }
    };

    // Delete a comment by index
    const handleDeleteComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    };

    // Increment the like count
    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    // Hide the card from display
    const handleHideCards = () => {
        setHidden(true);
    };

    // Return null if the card is hidden
    if (hidden) return null;

    return (
        <div className="ui card" onClick={handleToggleDetails}>
            {/* Card header with avatar and name */}
            <div className="content">
                <div className="right floated meta">14h</div>
                <img className="ui avatar image" src={image} alt={name} />
                {name}
            </div>

            {/* Image section */}
            <div className="image">
                <img src={image} alt={name} />
            </div>

            {/* Content section with like and comment count */}
            <div className="content">
                <span className="right floated">
                    <i className="heart outline like icon" onClick={handleLikeClick}></i>
                    {likes} likes
                </span>
                <i className="comment icon"></i>
                {comments.length} comments
            </div>

            {/* Form for adding new comments */}
            <div className="extra content">
                <form onSubmit={handleAddComment}>
                    <div className="ui large transparent left icon input">
                        <i className="heart outline icon"></i>
                        <input
                            type="text"
                            placeholder="Add Comment..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                    </div>
                    <button type="submit" className="ui button">Submit</button>
                </form>
            </div>

            {/* Detailed information shown when toggled */}
            {showDetails && (
                <div className="details">
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal Achieved: {highest}</p>
                    <p>Greased: {greased ? "Yes" : "No"}</p>
                </div>
            )}

            {/* List of comments with delete buttons */}
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        {comment}
                        <button onClick={() => handleDeleteComment(index)} className="ui red button">
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Button to hide the card */}
            <button onClick={handleHideCards} style={buttonStyles}>
                Hide Cards
            </button>
        </div>
    );
}

// Inline styles for the hide button
const buttonStyles = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default Cards;