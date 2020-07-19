import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { boatRampsPerMaterial } from '../actions/boat_ramp_actions'
import { bindActionCreators } from 'redux';

const BoatRampsPerMaterialContainer = (props)=> {

    useEffect(()=>{
    props.boatRampsPerMaterial()

    },[])
    const materialData = props.boat_ramps.boatRampsPerMaterialList;
    if(materialData !== undefined){
console.log(Object.keys(materialData).map((item,idx)=>materialData[item]))
    }


    return (
        <div>
            {materialData && Object.keys(materialData).map((item,idx)=><p>{item}:{materialData[item]}</p>)}
        </div>
    )
}

function mapStateToProps(state){
    return {
        boat_ramps: state.boat_ramps
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({boatRampsPerMaterial}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsPerMaterialContainer)