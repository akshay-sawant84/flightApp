import React, { useState, useContext } from "react";
import { passengerCount } from "../Constants/Constants";
import Button from "../Button/Button";
import { Context } from "../../Context/Store";
import { flightData } from "../Constants/Constants";
import "./Form.css";

const Form = (props) => {
  const { flightType } = props;
  const [state, dispatch] = useContext(Context);
  const [originCity, setoriginCity] = useState(null);
  const [destination, setdestination] = useState(null);
  const [departure, setdeparture] = useState(null);
  const [passengers, setpassengers] = useState(1);
  const [returnDate, setreturnDate] = useState(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    let dDate = new Date(departure);
    let rDate = new Date(returnDate);

    let finalData = flightData.filter((val) => {
      return (
        val.originCity === originCity &&
        val.destinationCity === destination &&
        dDate >= new Date(val.departureDate) &&
        rDate <= new Date(val.returnDate)
      );
    });

    let citiesData = {
      oCity: originCity,
      dCity: destination,
      dDate : departure,
      rDate : returnDate
    };

    dispatch({ type: "SAVE_FLIGHT_DATA", payload: finalData });
    dispatch({ type: "SAVE_PASSENGERS", payload: parseInt(passengers) });
    dispatch({ type: "SAVE_CITIES", payload: citiesData });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="form-control">
        <input
          name="originCity"
          type="text"
          placeholder="Enter Origin City"
          required
          title="Please enter your origin city"
          className="form-control-input"
          onChange={(e) => setoriginCity(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          name="destinationCity"
          type="text"
          placeholder="Enter Destination City"
          required
          title="Please enter your destination city"
          className="form-control-input"
          onChange={(e) => setdestination(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="form-labels">Departure Date : </label>
        <input
          type="date"
          name="departureDate"
          required
          className="form-control-input"
          onChange={(e) => setdeparture(e.target.value)}
        />
      </div>
      {flightType === 1 && (
        <div className="form-control">
          <label className="form-labels">Return Date : </label>
          <input
            type="date"
            name="returnDate"
            required
            className="form-control-input"
            onChange={(e) => setreturnDate(e.target.value)}
          />
        </div>
      )}
      <div className="form-control">
        <label className="form-labels">Passengers : </label>
        <select
          className="form-control-input"
          name="passengers"
          required
          onChange={(e) => setpassengers(e.target.value)}
        >
          {passengerCount.map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
      </div>
      {/* <Button btn = {'Search'} onClickFunc = {onSubmitForm} /> */}
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
