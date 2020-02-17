import React, {Component} from "react";
import "./IPAddress.css";

class IPAddressContainer extends Component{
    constructor(props){
        super(props);

        this.state={    //state 기록
            ip_address:"."
        };

        this.xhr='';
    }

    componentDidMount(){
        this.xhr = new XMLHttpRequest();
        this.xhr.onreadystatechange= ()=>{
            if (this.xhr.readyState === 4 && this.xhr.status === 200) {
                let response = JSON.parse(this.xhr.response);
                this.setState({
                    ip_address:response.ipAddress
                });
            }
        }
        this.xhr.open("GET","http://127.0.0.1:4000/ipAddress",true);
        this.xhr.send();

    }

    render(){
        return(
            <div>
                <h1>{this.state.ip_address}</h1>
                <p>(This is your IP address...probably :P )</p>
            </div>
        );
    }
}

export default IPAddressContainer;