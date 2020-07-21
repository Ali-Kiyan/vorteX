import React, { useEffect } from "react";
import { connect } from "react-redux";
import { chartDataGenerator } from '../components/utils/helper'

import { boatRampsPerMaterial, boatRampsPerMaterialFilter } from "../actions/boat_ramp_actions";
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
   


  useEffect(() => {
    props.boatRampsPerMaterial();
  }, []);
  const materialData = props.boat_ramps.boatRampsPerMaterialList;

  const onClickDataHandler = (chartData) => {
    props.boatRampsPerMaterialFilter(chartData.Material)
  };
  let k = {"a":1,"b":2}
  return (
    <>
    {false ? JSON.stringify(k): null}
    {materialData ? <ScatterChart width={300} height={450}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="Material" name="Material" />
      <YAxis type="number" dataKey="Boatramp" name="Boatramp" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend verticalAlign="top" height={36} />
      <Scatter
        name="Boatramps per material"
        data={chartDataGenerator(materialData, "Material", "Boatramp")}
        fill="#8884d8"
        onClick={onClickDataHandler}
      />
    </ScatterChart>
    : <p>loading...</p>
    }
    </>
  );
};

function mapStateToProps(state) {
  return {
    boat_ramps: state.boat_ramps,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boatRampsPerMaterial, boatRampsPerMaterialFilter }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoatRampsPerMaterialContainer);
