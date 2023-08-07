import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file
import Navbar from "../Navbar";

const HomePage = () => {
  const [value, setValue] = useState("");
  const [isJoinVisible, setIsJoinVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const handleNewMeeting = useCallback(() => {
    // Generate a random room code
    const firstPart = generateRandomString(3);
    const secondPart = generateRandomString(4);
    const thirdPart = generateRandomString(3);
    const roomCode = `${firstPart}-${secondPart}-${thirdPart}`;
    // Navigate to the new room with the generated room code
    navigate(`/room/${roomCode}`);
  }, [navigate]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setIsJoinVisible(e.target.value.trim() !== "");
  };

  const validateRoomCode = () => {
    const regex = /^[A-Za-z]{3}-[A-Za-z]{4}-[A-Za-z]{3}$/;
    if (value.trim() === "") {
      setErrorMessage("");
    } else if (!regex.test(value)) {
      setErrorMessage("Invalid room code. Please enter the correct format (e.g., ABC-DEFG-HIJ).");
    } else {
      setErrorMessage("");
    }
  };

  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
   <div>
      <Navbar /> {/* Add the Navbar component */}
    
    <div className="homepage-container">
      <div className="homepage-header">
        <img src="logo.png" alt="Google Meet Logo" />
        <h1>Welcome to VoxMeeting</h1>
      </div>
      <div className="homepage-content">
        <input
          value={value}
          onChange={handleInputChange}
          onBlur={validateRoomCode}
          type="text"
          placeholder="Enter the Room Code"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {isJoinVisible && !errorMessage && <button onClick={handleJoinRoom}>Join</button>}
        <button onClick={handleNewMeeting}>New Meeting</button>
      </div>
    </div>
   </div>
  );
};

export default HomePage;
