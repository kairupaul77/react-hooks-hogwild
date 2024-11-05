import React from "react"; // Importing React library
import piggy from "../assets/porco.png"; // Importing the piggy image

// Navigation component for the HogWild app
const Nav = () => {
    return (
        <div className="navWrapper"> {/* Wrapper for the navigation elements */}
            <span className="headerText">HogWild</span> {/* Header title of the app */}
            <div className="TwirlyPig"> {/* Container for the pig image */}
                <img 
                    src={piggy} 
                    className="App-logo" 
                    alt="piggy" // Alt text for accessibility
                />
            </div>
            <span className="normalText"> {/* Subtitle of the app */}
                A React App for County Fair Hog Fans
            </span>
        </div>
    );
};

export default Nav; // Exporting the Nav component for use in other parts of the app