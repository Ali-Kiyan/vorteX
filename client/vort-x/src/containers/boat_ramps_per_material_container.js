import React, { useEffect } from "react";
import { connect } from "react-redux";
import { boatRampsPerMaterial } from "../actions/boat_ramp_actions";
import { bindActionCreators } from "redux";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter,
} from "recharts";

const BoatRampsPerMaterialContainer = (props) => {
  const chartDataGenerator = (data) => {
    let Materials = [];
    let Boatramps = [];

    for (let item in data) {
      Materials.push(item);
      Boatramps.push(data[item]);
    }

    if (Materials.length == Boatramps.length) {
      let chartData = [];
      // More error handing can be done where the metrics does not match
      for (let i = 0; i < Materials.length; i++) {
        chartData.push({ Material: Materials[i], Boatramp: Boatramps[i] });
      }
      return chartData;
    } else {
      console.error("data does not match");
      return false;
    }
  };

  useEffect(() => {
    props.boatRampsPerMaterial();
  }, []);
  const materialData = props.boat_ramps.boatRampsPerMaterialList;

  const onClickDataHandler = (chartData) => {
    console.log(chartData.Material);
  };

  return (
    <ScatterChart width={1200} height={450}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="Material" name="Material" />
      <YAxis type="number" dataKey="Boatramp" name="Boatramp" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend verticalAlign="top" height={36} />
      <Scatter
        name="Boatramps per material"
        data={chartDataGenerator(materialData)}
        fill="#8884d8"
        onClick={onClickDataHandler}
      />
    </ScatterChart>
  );
};

function mapStateToProps(state) {
  return {
    boat_ramps: state.boat_ramps,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boatRampsPerMaterial }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoatRampsPerMaterialContainer);
