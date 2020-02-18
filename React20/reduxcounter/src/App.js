import {connect} from "react-redux";
import Counter from "./Counter";

let mapStateToProps = (state)=>{
    return{
        countValue:state.count
    };
}

let increaseAction = {type:"increase"};
let decreaseAction = {type:"decrease"};

let mapDispactchToProps = (dispatch)=>{
    return{
        increaseCount:()=>dispatch(increaseAction),
        decreaseCount:()=>dispatch(decreaseAction)
    }
}

let connectedComponent = connect(
    mapStateToProps,
    mapDispactchToProps
)(Counter);

export default connectedComponent;