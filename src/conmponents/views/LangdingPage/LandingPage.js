import React from 'react'
import LottoRank from '../Lotterydraw/LottoRank'
import LottoAuto from '../Lotterydraw/LottoAuto'
export const LandingPage = () => {

  return (
    <div className='landing-contain' style={{width: "80%",height:"100",background:"skyblue" , margin : "auto"}}>
        <div className="d-flex justify-content-center" style={{fontSize:"50px"}}>
            로또 시뮬레이터 사이트
        </div>
        <div>
          <LottoAuto/>
        </div>
          
        <div className='lotto-rank'>
          <LottoRank/>
        </div>
    </div>
  )
}
