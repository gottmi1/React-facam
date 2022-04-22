import React, { useRef, useState } from 'react'
// import dayjs from "dayjs"
// import 'dayjs/locale/ko'

// import utc from "dayjs/plugin/utc"
// import timezone from "dayjs/plugin/timezone"

import { add,format,sub,differenceInHours } from "date-fns"
import { format as timezoneFormat} from 'date-fns-tz'
import addWeeks from "date-fns/addWeeks"
import { ko } from "date-fns/locale"

// dayjs.locale('ko');
// dayjs.extend(utc);
// dayjs.extend(timezone);

export default function DateFnsExample() {
const birthDayRef = useRef(null);
const [day, setDay] = useState("");
const handleBirthDayChange = (e) => {
setDay(format(new Date(e.target.value), "EEEE", {locale : ko}))
}

const dateFnsDate = new Date();
const newdateFnsDate = add(dateFnsDate, {weeks : 1});
const NewdateFnsDate2 = addWeeks(newdateFnsDate, 1);

return (
<div>
  <h1>date-fns</h1>
  <div>Immutable check</div>
  <div>
    {format(dateFnsDate, "yyyy-MM-dd")}
    <br />
    {format(newdateFnsDate, "yyyy-MM-dd")}
    <br />
    {format(NewdateFnsDate2, "yyyy-MM-dd")}
    <br />
  </div>
  <br />

  <div>Summer Time (New York)</div>
  <div>
    2018년 3월 10일 13시에 하루 더하기 :
    {timezoneFormat(
      add(
        new Date("2018-03-10 13:00:00")
        , {days : 1}
        )
        ,"yyyy-MM-dd HH-mm-ssXXX"
        ,{timeZone : "America/New_York"}
      )
      }
  </div>
  <div>
    2018년 3월 10일 13시에 24시간 더하기 :
    {timezoneFormat(
      add(
        new Date("2018-03-10 13:00:00")
        , {hours : 24}
        )
        ,"yyyy-MM-dd HH-mm-ssXXX"
        ,{timeZone : "America/New_York"}
      )
      }
  </div>

  <br />
  <div>Leap year (Korea 윤년) </div>
  <div>
    2017년 1월 1일에서 1년 빼기 :
    {format(sub(new Date("2017-01-01"), {years : 1}) , "yyyy-MM-dd")}
  </div>
  <div>
    2017년 1월 1일에서 365일 빼기 :
    {format(sub(new Date("2017-01-01"), {days : 365}) , "yyyy-MM-dd")}
  </div>
  <br />
  <div>한국어 표기 04-21-2022를 2022년 4월 21일로 표기</div>
  <div>{format(new Date("04-21-2022") , "yyyy년 MM월 dd일")}</div>
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
  <div>2022-01-01 00:00 과 2022-04-21 16:00은 몇시간 차이인가??;</div>
  <div>
    {differenceInHours(new Date("2022-01-01 00:00")
    , new Date("2022-04-21 16:00"))} 시간 차이
  </div>

</div>
)
}