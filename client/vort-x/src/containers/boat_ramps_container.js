import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { boatRampList } from '../actions/boat_ramp_actions'
import { bindActionCreators } from 'redux';

const BoatRampsContainer = (props)=> {

    useEffect(()=>{
    props.boatRampList()

    },[])
    console.log(props)


    return (
        <div>

        </div>
    )
}

function mapStateToProps(state){
    return {
        boat_ramps: state.boat_ramps
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({boatRampList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoatRampsContainer)