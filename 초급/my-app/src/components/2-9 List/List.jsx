import React from 'react'

export default function List() {
  // const arr = [1,2,3,4]
  // return (
  //   <ul>
  //     {arr.map(num => <li key={num.toString()}>{num}</li>)}
  //   </ul>
  // )
  const todos = [{
    id : 1, text : "drink"
  },{
    id : 2, text : "eat"
  },{
    id : 3, text : "slip"
  },{
    id : 4, text : "aas"
  },]

  const Item = (props) => {
    return <li>{props.text}</li>
    // 여기서 li에 key를 줘도 warning은 계속 뜬다. 그리고 Item 컴포넌트에서 키를 줘도 key는 props가 아니기 때문에 자식은 key를 props로 받지 않는다.
  }

  const TodoList = todos.map(item => <Item key={item.id} {...item} />)

  return <>{TodoList}</>
}
