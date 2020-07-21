import React, {useEffect} from 'react'
import { Button } from 'grommet';
import { connect } from "react-redux";
import { boatRampList } from "../../actions/boat_ramp_actions";
import { bindActionCreators } from "redux";

const DefaultButton = ({name, onClick, ...props}) => {
      const onClickHandler = () => {
        props.boatRampList();
      }
    return (
        <Button primary label={name} onClick={onClickHandler} {...props} />
)};

function mapStateToProps(state) {
    return {
      boat_ramps: state.boat_ramps,
    };
  }

function mapDispatchToProps(dispatch) {
return bindActionCreators({ boatRampList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultButton);
