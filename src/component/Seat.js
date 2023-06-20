import React, { useContext, useEffect } from 'react'
import { DataContext } from './Context'

import "../css/seat.scss"

const Sheet = () => {
    const {jsonData} = useContext(DataContext);
    const _seat = jsonData.theater
    var seat = _seat[0].seat
    var row_cnt = Number(_seat[0].row_cnt)-1
    var col_cnt = Number(_seat[0].col_cnt)

    function create2DArray(row, col) {
      arr = new Array(row)
      for(var i=0; i<row; i++) {
        arr[i] = new Array(col);
      }
      return arr;
    }

    var arr = create2DArray(row_cnt, col_cnt)

    useEffect(() => {
      
    })

  return (
    <div>
        <div className='wrap_seat_num'>
            {/* {
                seat.map((obj, key) => {
                  var temp = obj.split('')
                  for(var i=0; i<temp.length; i++) {
                    arr[key][i] = temp[i];
                  }
                  console.log(arr)
                  return (
                    <div className='seat_num'>
                      <span>
                        123
                      </span>
                    </div>
                )
                })
            } */}
            {
              seat.filter((obj, key) => {
                var temp = obj.split('')
                for(var i=0; i<temp.length; i++) {
                  arr[key][i] = temp[i];
                }
              })
            }
            {
              arr.map(obj => {
                return obj.map((obj2, key) => {
                  if(key === 0) {
                    return (
                      <div className='wrap_seat_num' id={key}>
                          <span className='seat_num'>{obj2}</span>
                      </div>
                    )
                  } else {
                    return (<span className='seat_num'>{obj2}</span>)
                  }
                })
              })
            }
        </div>
    </div>
  )
}

export default Sheet