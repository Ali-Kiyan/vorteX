import React, { useEffect } from "react";
import { connect } from "react-redux";
import { boatRampList } from "../actions/boat_ramp_actions";
import { bindActionCreators } from "redux";
import * as MapboxGL from "mapbox-gl";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

const BoatRampsContainer = (props) => {

  useEffect(() => {
    props.boatRampList();
  },[]);

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_API_KEY,
  });

  let data = props.boat_ramps.boatRampsList
    ? props.boat_ramps.boatRampsList
    : {};
    
    return (      
      <>
      { (Object.keys(data).length !== 0 && data["features"][0]) ? <Map
        zoom={[20]}
        center={[
          data.features[0]["geometry"]["coordinates"][0][0][0][0],
          data.features[0]["geometry"]["coordinates"][0][0][0][1],
        ]}
        style="mapbox://styles/mapbox/dark-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <GeoJSONLayer
          data={data}
          linePaint={
            MapboxGL.LinePaint = {
              "line-color": "yellow",
              "line-width": 8,
              "line-opacity": 0.75,
            }
          }
          lineLayout={
            MapboxGL.LineLayout = {
              "line-join": "round",
              "line-cap": "round",
            }
          }
        />
      </Map> : <p>loading...</p>}
      </>
    );
};

function mapStateToProps(state) {
  if (state.boat_ramps.material !== undefined) {
    const boatRampsList = Object.assign({}, state.boat_ramps.boatRampsList);
    const featureList = boatRampsList["features"];

    const materialFilter = (item) => {
      if (item["properties"]["material"] === state.boat_ramps.material) {
        return true;
      } else {
        return false;
      }
    };

    const filteredFeatureList = featureList.filter(materialFilter);
    boatRampsList["features"] = filteredFeatureList;
    boatRampsList["totalFeatures"] = filteredFeatureList.length;
    return {
      boat_ramps: {
        boatRampsList: boatRampsList,
      },
    };
  } else {
    return {
      boat_ramps: state.boat_ramps,
    };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boatRampList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsContainer);
