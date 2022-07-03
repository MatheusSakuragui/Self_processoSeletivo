import { Component } from "react";

type props = {
    id: string
    title: string
    type: string
    value: string
    function: any
}

export default class Input extends Component<props>{
    render(){
        return(
            <>
                <div className="input-field col s12">
                    <input value={this.props.value} placeholder={this.props.title} id={this.props.id} name={this.props.id} onChange={this.props.function} type={this.props.type} className="validate"/>
                </div>
            </>
        )
    }
}