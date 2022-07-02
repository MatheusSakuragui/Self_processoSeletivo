import { Component } from "react";

type props = {
    id: string
    title: string
    type: string
}

export default class Input extends Component<props>{
    render(){
        return(
            <>
                <div className="input-field col s12">
                    <input placeholder={this.props.title} id={this.props.id} type={this.props.type} className="validate"/>
                </div>
            </>
        )
    }
}