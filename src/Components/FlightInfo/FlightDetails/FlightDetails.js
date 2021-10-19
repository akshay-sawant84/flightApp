import React, { useContext } from "react";
import "./FlightDetails.css";
import Button from "../../Resusable/Button/Button";
import { Context } from "../../Context/Store";

const FlightDetails = (props) => {
  const { flightType } = props;
  const [state] = useContext(Context);

  const { cities, flights, passengers } = state;

  return (
    <div className="flight-details">
      {cities !== null && (
        <>
          <div className="flight-destinations">
            <div className="w-80">
              <h1 className = 'flight-destinations_heading'>
                {`${cities.oCity} > ${cities.dCity}`}{" "}
                {flightType === 1 && `> ${cities.oCity}`}
              </h1>
            </div>
            <div className="w-20">
              <p>Depart : {cities.dDate}</p>
              {flightType === 1 && <p>Return : {cities.rDate}</p>}
            </div>
          </div>
          <div className="flight_time-price">
            {flights.map((val) => (
              <div className="flight_time-price_card mb-2">
                <div className="w-80">
                  <h2>Rs. {flightType === 1 ? `${val.returnPrice} x ${passengers}` : `${val.price} x ${passengers}`} </h2>
                  <div className="d-flex flex-wrap">
                    <div className="w-50">
                      <p className="flight_time-price_card-info">
                        {val.flightInfo.code}
                      </p>
                      <h4 className="flight_time-price_card-info">
                        {val.flightInfo.journeyCode}
                      </h4>
                      <h4 className="flight_time-price_card-info">
                        Depart : {val.flightInfo.departTime}
                      </h4>
                      <h4 className="flight_time-price_card-info">
                        Arrive : {val.flightInfo.arriveTime}
                      </h4>
                    </div>
                    {flightType === 1 && (
                      <div className="w-50">
                        <p className="flight_time-price_card-info">
                          {val.returnFlightInfo.code}
                        </p>
                        <h4 className="flight_time-price_card-info">
                          {val.returnFlightInfo.journeyCode}
                        </h4>
                        <h4 className="flight_time-price_card-info">
                          Depart : {val.returnFlightInfo.departTime}
                        </h4>
                        <h4 className="flight_time-price_card-info">
                          Arrive : {val.returnFlightInfo.arriveTime}
                        </h4>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-20">
                  <div className="book_this_flight-section">
                    <img src="https://via.placeholder.com/150" />
                    {/* <button className = 'book_flight-btn'>Book this flight</button> */}
                    <Button
                      btn={"Book this flight"}
                      onClickFunc={() => console.log("Booked this flight")}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FlightDetails;
