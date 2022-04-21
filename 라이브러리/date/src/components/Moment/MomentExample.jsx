import React, { useRef, useState } from 'react'
import moment from 'moment-timezone'
import "moment/locale/ko"

export default function MomentExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState(""); 
  const handleBirthDayChange = (e) => {
    setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"))
  }

  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable check</div>
      <div>
        {momentDate.format()}
        {/* 현재로부터 일주일 후 newMomentDate의 영향을 받았다 */}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
        {/* clone했기 때문에 원본인 newMomentDate는 바뀌지 않고 따로 1주일 추가됨 */}
        <br />
      </div>
      <br />
      <div>Summer Time (New York)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기 : {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1,"day").format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기 : {moment.tz("2018-03-10 13:00:00" , "America/New_York").add(24,"hour").format()}
      </div>
      <br />
      <div>Leap year (Korea 윤년) </div>
      <div>
        2017년 1월 1일에서 1년 빼기 : {moment("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에서 365일 빼기 : {moment("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어 표기 04-21-2022를 2022년 4월 21일로 표기</div>
      <div>{moment("04-21-2022").format("YYYY년 MM월 DD일")}</div>
      <br />
      <div>요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까</div>
        <div>{day}</div>
      </div>
      <br />
      <br />
      <div>두 날짜 비교</div>
      <div>2022-01-01 00:00 과  2022-04-21 16:00은 몇시간 차이인가??;</div>
      <div>{moment("2022-01-01 00:00").diff(moment("2022-04-21 16:00"), "hours")} 시간</div>
      
    </div>
  )
}
