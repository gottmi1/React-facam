import React from 'react'

export default function WithHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted : false
    }
    render() {
      const {hasMounted} = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />
    }
    componentDidMount() {
      this.setState({hasMounted : true})
    }
  }

  NewComponent.displayName = `WithHasMounted(${Component.name})`

  return NewComponent;
}
