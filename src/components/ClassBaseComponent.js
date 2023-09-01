import { Component } from "react";

class ClassBaseComponent extends Component{
    constructor(props){
super(props);
console.log("Constructor")
this.state={
    count:0
}

    }
    componentDidMount(){
        console.log("Component did Mount")
    };
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    handleClick = e => {
        const count = this.state.count;
        this.setState({ count: count + 1 });
      };
    render(){
        console.log("render")
        return(
            <>
            <h1>{this.state.count}</h1>
            <h1>This is Class Base Component</h1>
            <button onClick={()=>this.setState({ count: this.state.count + 1 })}>Increment</button>
            </>
        )
    }
}
export default ClassBaseComponent;