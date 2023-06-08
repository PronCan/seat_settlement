import React from 'react'
import Seat from './Seat'

const Main = () => {
  return (
    <div>
      <h1>뮤지컬 자리 정산 시트</h1>
      <form action='#'>
        <select name='theater' id='theater'>
          <option value="select">선택</option>
          <option value="드림아트센터1관">드림아트센터 1관</option>
          <option value="TOM1관">TOM 1관</option>
        </select>
      </form>
      <Seat></Seat>
    </div>
  )
}

export default Main