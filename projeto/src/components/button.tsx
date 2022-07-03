import { Component } from "react";

type props = {
    id: string
    title: string
    function: any
}

export default class Button extends Component<props>{
    render(){
        return(
            <>
                <button className="btn waves-effect waves-light" onClick={this.props.function} id={this.props.id} type="submit" name={this.props.id}>{this.props.title}</button>
            </>
        )
    }
}