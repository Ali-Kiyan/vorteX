export default function (state = {}, action) {

  switch (action.type) {
    case "GET_BOAT_RAMPS":
      return { ...state, boatRampsList: action.payload };

    case "GET_BOAT_RAMPS_PER_MATERIAL":
      return { ...state, boatRampsPerMaterialList: action.payload };

    case "GET_BOAT_RAMPS_PER_SIZE":
      return { ...state, boatRampsPerSizeList: action.payload };

    default:
      return state;
  }
  
}
