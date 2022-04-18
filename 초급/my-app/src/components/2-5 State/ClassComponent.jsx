import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    // 여기서 하는 동작은 useEffec에서 하고 있다
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    // 이건 useEffect에서 클린업으로 할 수 있음
  }

  tick() {
    this.setState({
      date: new Date()
    });
    // 상태관리. 위에서 State를 초기화 해주고 여기서는 this의 setState를 new Date()로 업데이트를 해줬다
  }

  render() {
    return (
      <div>
        <h1>it's ClassComponent</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassComponent;