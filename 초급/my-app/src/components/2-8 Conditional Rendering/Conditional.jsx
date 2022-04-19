import React from 'react'

function UserGreeting(props) {
  return <h1>{props.name && props.name +','} Welcome 
  {/* {props.count && `it's ${props.count} time`} 도 되지만 삼항연산자를 사용하면 아래처럼 표현 가능 아래 표현이 더 안전함*/}
  {props.count ? `it's ${props.count} time` : null}
  </h1>
  // count가 0 이면 props.count === false로 인식하기 때문에 문자열 리터럴이 나오지 않는다.
}

function GuestGreeting() {
  return <h1>Please signup</h1>
}

function Greeting(props) {
  // if(props.isLoggedIn) {
  //   return <UserGreeting name="jinwon" count={0}/>
  // }
  // return <GuestGreeting />
  // 아래 조건으로 리팩토링
  return props.isLoggedIn ? <UserGreeting name="zz" count={0} /> : <GuestGreeting /> 
}

export default function Conditional() {
  const isLoggedIn = true
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
