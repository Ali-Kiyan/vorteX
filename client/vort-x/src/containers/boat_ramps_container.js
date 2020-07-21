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

  const data = props.boat_ramps.boatRampsList
    ? props.boat_ramps.boatRampsList
    : {};
    
    return (      
      <>
      { (Object.keys(data).length !== 0 && data["features"][0]) ? <Map
        zoom={[18]}
        center={[
          data.features[0]["geometry"]["coordinates"][0][0][0][0],
          data.features[0]["geometry"]["coordinates"][0][0][0][1],
        ]}
        style="mapbox://styles/mapbox/dark-v9"
        containerStyle={{
          height: "100%",
          width: "100%",
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



  const materialFilterFunction = (item) => {
    if (item["properties"]["material"] === state.boat_ramps.material) {
      return true;
    } else {
      return false;
    }
  };

  const sizeFilterFunction = (item) => {
    const area = item['properties']['area_'];
    if(area>=0 && area<50 && state.boat_ramps.size === "small_size"){
        return true
    }else if(area>=50 && area<200 && state.boat_ramps.size === "medium_size"){
        return true
    }else if(area>=200 && area<526 && state.boat_ramps.size === "large_size"){
        return true
    }else{
      return false
    }
  };

  const filterData = (filterFunction, boatRampsList) => {
    const featureList = boatRampsList["features"];
    const filteredFeatureList = featureList.filter(filterFunction);
    boatRampsList["features"] = filteredFeatureList;
    boatRampsList["totalFeatures"] = filteredFeatureList.length;
    return boatRampsList
  }

  if(state.boat_ramps.size !== undefined && state.boat_ramps.material !== undefined){
    const boatRampsListFilteredByMaterial = filterData(materialFilterFunction, Object.assign({}, state.boat_ramps.boatRampsList));
    const boatRampsListFilteredBySizeAndMaterial = filterData(sizeFilterFunction, Object.assign({}, boatRampsListFilteredByMaterial));
    return {
      boat_ramps: {
        boatRampsList: boatRampsListFilteredBySizeAndMaterial,
    }
    }
  }

  else if (state.boat_ramps.material !== undefined) {
    const boatRampsList = filterData(materialFilterFunction, Object.assign({}, state.boat_ramps.boatRampsList));
    return {
      boat_ramps: {
        boatRampsList: boatRampsList,
    }
    }
  }

  else if(state.boat_ramps.size !== undefined){
    const boatRampsList = filterData(sizeFilterFunction, Object.assign({}, state.boat_ramps.boatRampsList));
    return {
      boat_ramps: {
        boatRampsList: boatRampsList,
    }
    }
  }

  else {
    return {
      boat_ramps: state.boat_ramps,
    };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boatRampList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsContainer);
