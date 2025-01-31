import React, { useState } from "react";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option
  const [submittedValue, setSubmittedValue] = useState(""); // State to store submitted value

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      setSubmittedValue(selectedOption);
    } else {
      alert("Please select an option before submitting.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Select an Option</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Dropdown Menu */}
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          style={styles.select}
        >
          <option value="" disabled>
            -- Select an option --
          </option>
          <option value="Option 1">Image</option>
          <option value="Option 2">Video</option>
          <option value="Option 3">Text</option>
        </select>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {/* Display Submitted Value */}
      {submittedValue && (
        <div style={styles.result}>
          <p>You submitted: <strong>{submittedValue}</strong></p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    marginTop: "10px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default Services;
