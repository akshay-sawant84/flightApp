import React, { useState, useContext } from "react";
import "./SideFilter.css";
import Form from "../../Resusable/Form/Form";
import { Context } from "../../Context/Store";

const flightTypes = [
  {
    id: 0,
    type: "One Way",
  },
  {
    id: 1,
    type: "Return",
  },
];

const SideFilter = ({ flightType, setflightType }) => {
  const [state, dispatch] = useContext(Context);

  const _onChangeFlightType = (id) => {
    setflightType(id);
    dispatch({ type: "CLEAR_DATA" });
  };

  return (
    <div className="side_filter-section">
      <div className="flight_tabs-section">
        {flightTypes.map((val) => (
          <p
            className={`one_way flight_tabs ${
              flightType === val.id ? "flight_tabs-active" : null
            }`}
            onClick={() => _onChangeFlightType(val.id)}
          >
            {val.type}
          </p>
        ))}
      </div>
      <div className="side_filter_form">
        <Form flightType={flightType} />
      </div>
    </div>
  );
};

export default SideFilter;
