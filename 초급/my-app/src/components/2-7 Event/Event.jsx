import React from 'react'

export default function Event() {
  const handleButtonClick = () => {
    console.log("button click")
  }
  const mouseLeaveHandle = (e) => {
    console.dir(e)
    // 신테틱 prop이름은 onMouseLeave지만 신텐틱이벤트 타입은 mouseout이다
  }

  const handleDivClick = () => {
    console.log("div click")
  }

  const handleClickCapture = () => {
    console.log("capturing")
  }

  const handleClickBubble = () => {
    console.log("bubble")
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleDivClick} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={mouseLeaveHandle}>Button</button>
      </div>
    </div>
  )
}
