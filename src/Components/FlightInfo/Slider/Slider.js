import React, { useState, useContext } from "react";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "./Slider.css";
import { Context } from "../../Context/Store";
import { flightData } from "../../Resusable/Constants/Constants";

const marks = {
  1000: "1000",
  100000: "100000",
};

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} %`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const PriceSlider = (props) => {
  const { flightType } = props;
  const [state, dispatch] = useContext(Context);

  const _onSliderValues = (value) => {
    if (state.cities !== null) {
      let finalData = flightData.filter((val) => {
        if (flightType === 0) {
          return (
            val.originCity === state.cities.oCity &&
            val.destinationCity === state.cities.dCity &&
            val.price >= value[0] &&
            val.price <= value[1]
          );
        } else {
          return (
            val.originCity === state.cities.oCity &&
            val.destinationCity === state.cities.dCity &&
            val.returnPrice >= value[0] &&
            val.returnPrice <= value[1]
          );
        }
      });

      dispatch({ type: "SAVE_FLIGHT_DATA", payload: finalData });
    }
  };

  return (
    <div className="slider-section">
      <h4>Refine Flight Search</h4>
      {/* <Slider /> */}
      <Range
        min={1000}
        max={100000}
        marks={marks}
        allowCross={false}
        defaultValue={[1000, 100000]}
        handle={handle}
        onChange={_onSliderValues}
      />
    </div>
  );
};

export default PriceSlider;
