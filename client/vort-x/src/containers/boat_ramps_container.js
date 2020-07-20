import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { boatRampList } from "../actions/boat_ramp_actions";
import { bindActionCreators } from "redux";
import MapGL, { Source, Layer } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const BoatRampsContainer = (props) => {
  useEffect(() => {
    props.boatRampList();
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 20,
  });
  const [a, seta] = useState(0)

  const data = props.boat_ramps.boatRampsList
    ? props.boat_ramps.boatRampsList
    : {};

  if (Object.keys(data).length !== 0) {
      console.log(data.features[0]["geometry"]["coordinates"][0][0][0][1])
    return (
      <MapGL
        onLoad={()=>setViewport({
            latitude: data.features[0]["geometry"]["coordinates"][0][0][0][1],
            longitude: data.features[0]["geometry"]["coordinates"][0][0][0][0],
            zoom: 20,
        })}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        accessToken={process.env.REACT_APP_MAP_API_KEY}
        onViewportChange={setViewport}
        {...viewport}
      >
        <Source id="route" type="geojson" data={data} />
        <Layer
          id="route"
          type="line"
          source="route"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#ffffff",
            "line-width": 8,
          }}
        />
      </MapGL>
    );
  } else {
    return <p>loading...</p>;
  }
};

function mapStateToProps(state) {
  return {
    boat_ramps: state.boat_ramps,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boatRampList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsContainer);
