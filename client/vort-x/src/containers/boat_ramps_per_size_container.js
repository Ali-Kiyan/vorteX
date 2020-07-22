import React, { useEffect } from 'react'
import { chartDataGenerator, UIwrapper } from '../components/utils/helper'
import { connect } from "react-redux";
import { boatRampsPerSize, boatRampsPerSizeFilter } from "../actions/boat_ramp_actions";
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

const BoatRampsPerSizeContainer = (props) => {

  useEffect(() => {
    props.boatRampsPerSize()
  }, [])

  const sizeData = props.boat_ramps.boatRampsPerSizeList;
  const onClickDataHandler = (chartData) => {
    props.boatRampsPerSizeFilter(chartData.Size)
  };

  return (
    <>
      {sizeData ? <ScatterChart width={290} height={450}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="Size" name="Size" />
        <YAxis type="number" dataKey="Boatramp" name="Boatramp" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend verticalAlign="top" height={36} />
        <Scatter
          name="Boatramps per size"
          data={UIwrapper(chartDataGenerator(sizeData, "Size", "Boatramp"))}
          fill="#8884d8"
          onClick={onClickDataHandler}
        />
      </ScatterChart>
        : <p>loading...</p>
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    boat_ramps: state.boat_ramps
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boatRampsPerSize, boatRampsPerSizeFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsPerSizeContainer)