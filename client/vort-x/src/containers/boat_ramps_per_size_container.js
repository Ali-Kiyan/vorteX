import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { boatRampsPerSize } from '../actions/boat_ramp_actions'
import { bindActionCreators } from 'redux';

const BoatRampsPerSizeContainer = (props)=> {

    useEffect(()=>{

    props.boatRampsPerSize()

    },[])
    
    const sizeData = props.boat_ramps.boatRampsPerSizeList;
    return (
        <div>
            {sizeData && Object.keys(sizeData).map((item,idx)=><p>{item}:{sizeData[item]}</p>)}
        </div>
    )
}

function mapStateToProps(state){
    return {
        boat_ramps: state.boat_ramps
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({boatRampsPerSize}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsPerSizeContainer)