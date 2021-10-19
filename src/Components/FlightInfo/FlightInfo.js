import React, {useState} from "react";
import FlightDetails from "./FlightDetails/FlightDetails";
import SideFilter from "./SideFilter/SideFilter";
import Slider from "./Slider/Slider";
import './FlightInfo.css'
import { flightData } from "../Resusable/Constants/Constants";

const FlightInfo = () => {
  const [flightType, setflightType] = useState(0)
  return (
    <div className="w-100 d-flex flex-wrap">
      <div className="w-40">
        <SideFilter flightType = {flightType} setflightType = {setflightType} />
        <Slider flightType = {flightType} />
      </div>
      <div className="w-60">
        <FlightDetails flightType = {flightType} />
      </div>
    </div>
  );
};

export default FlightInfo;
