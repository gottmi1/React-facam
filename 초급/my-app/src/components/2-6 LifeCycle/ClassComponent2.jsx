import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {date : new Date()};
    this.handleClick = this.handleClick.bind(this);
    // 생명주기로 정해진 메서드 외에 다른 함수에서 this로 state에 접근하려면 쓰려면 항상 bind(this)로 바인딩 해줘야한다. 근데 함수선언식 말고 화살표함수로 쓰면 괜찮음(js에서 this가 쓰이는 방식처럼 차이가 있다)
  }

  componentDidMount() {
    console.log("mount")
    this.timerID = setInterval(()=> this.tick(), 10000)
  }

  componentDidUpdate() {
    console.log("updatess")
  }

  componentWillUnmount() {
    console.log("unmount")
    clearInterval(this.timerID)
  }

  tick() {
    console.log("tick")
    this.setState({date : new Date()});
  }
  
  handleClick() {
    alert(this.state.date)
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello World!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
