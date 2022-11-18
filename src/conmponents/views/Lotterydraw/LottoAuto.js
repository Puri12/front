import React, { useState } from 'react'
import {Button,Form} from 'react-bootstrap'
import LottoBall from './LottoBall'
import axios from "axios"
import "./lotto.css"


function LottoAuto() {
  const [Nums, setNums] = useState("")
  const [LottoBalls, setLottoBalls] = useState([])




    const onValue=(e)=>{
      setNums(e.currentTarget.value)
      console.log("이건 뭐니?",Nums)
      e.preventDefault();
    }

    const AutoDrawHandler=(e)=>{
        axios.post(`https://jossiya.jossiya.shop/api/lottoAutos/${Nums}`)
        .then(response=>{
          console.log("reponse",response.data)
          if(response.data.success){
            setLottoBalls(response.data)
          }else{
            alert("로또 자동 생성에 실패 했습니다!.")
          }
        })
    }

  return (
    <div>

      <div className="d-flex justify-content-center">
        <Form.Group>
        <Form.Control type="text" placeholder="몇개?"value={Nums} onChange={onValue}/>
          <Button variant="dark" onClick={AutoDrawHandler} >자동 생성</Button>
        </Form.Group>
      </div>

      <div className='client-ball d-flex justify-content-center'>
        <LottoBall LottoBall={LottoBalls.data}/>
      </div>
    </div>
  )
}

export default LottoAuto