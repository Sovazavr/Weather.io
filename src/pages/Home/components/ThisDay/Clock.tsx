import React, { Component } from "react"


interface Props {

}

interface State {
    time: string
}


class Clock extends Component<Props,State> {
    intervalID!: NodeJS.Timeout;
    //intervalID!: NodeJS.Timeout;
    constructor(props: any) {
        super(props);
        this.state = {
          time: new Date().toLocaleString(),
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().getHours().toLocaleString()+":"+ new Date().getMinutes().toLocaleString() +":"+ new Date().getSeconds().toLocaleString(),
        });
      }
      render() {
        return <>{this.state.time}.</>;
      }
}

export default Clock