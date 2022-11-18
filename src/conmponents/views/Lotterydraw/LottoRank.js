import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Table,Form} from 'react-bootstrap'
import LottoBall from './LottoBall'
function LottoRank(props) {
    const [Rounds, setRounds] = useState(null)
    let array=[]
    const [Array, setArray] = useState([])
    const [Value, setValue] = useState("")
    const [roundRank, setroundRank] = useState([])
    const [Date, setDate] = useState("")
    
   const renderSelect=()=>{
        axios.get(`https://jossiya.jossiya.shop/api/winningNum`)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)
                setRounds(response.data)
                var i=0;
                for( i=Rounds?.data?.totalPages-1; i>=0; i--){
                    array.push(<option  key={i}  value={`${i+1}`}>{i+1}</option>)
                    // setValue(i)
                }
                setArray(array)
            }else{
                alert("횟차 정보를 불러오지 못했습니다.!!!")
            }
        })
    }
    const handleChangeSelect=(e)=>{
    setValue(e.currentTarget.value)
    console.log(e.currentTarget.value)
    axios.get(`https://jossiya.jossiya.shop/api/winningNum?page=${Value-1}`)
    .then(response=>{
        if(response.data.success){
            console.log("날짜 데이터 뽑기 위한 거", response.data.data.content[0].date)
            setDate(response.data.data.content[0].date)
        }else{
            alert("라운드 회차 날짜 불러오기 싫패햇어요!")
        }
    })
    alert("한 30초만 기다리세요")
    axios.post(`https://jossiya.jossiya.shop/api/lottoWins/${e.currentTarget.value}`)
    .then(response=>{
        console.log(response.data)
        if(response.data.success){
            
                console.log("로또 당첨 결과",response.data.data)
                setroundRank(response.data.data)
        }else{ 
            alert("횟차 게임 추첨에 실패하였습니다")
        }
    })
}

        useEffect(() => {
                if(Array.length==0){
                    renderSelect()
                    console.log("언제 시작되냐1")
                }
        }, [Array])
    if(Rounds?.data){
        return (
            
            <div className='contain' style={{background:"skyblue", display : "flex", flexDirection:"column", alignContent:"center", alignItems:"center"}}>
            <Form.Select aria-label="Default select example" style={{ width: "10rem" }}  onChange={handleChangeSelect}>
                    {Array?.map((e)=>{
                        return(
                            e
                        )
                    })}
                </Form.Select>
                <h1>{Value} 회차</h1>
                <div>당첨 결과</div>
                <div>({Date}일) 추첨</div>
    
                
                <div>
                    <LottoBall/>
                </div>
                {/* 로또 등수 테이블 */}
                <div className='rank-table'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>등수</th>
                            <th>당첨 게임 수</th>
                            <th>당첨 기준</th>
                            <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>{roundRank.firstRank}명</td>
                            <td>당첨번호 6개 숫자일치</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>{roundRank.secondRank}명</td>
                            <td>당첨번호 5개 숫자일치+보너스 숫자일치</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td >{roundRank.thirdRank}명</td>
                            <td>당첨번호 5개 숫자일치</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td >{roundRank.fourthRank}명</td>
                            <td>당첨번호 4개 숫자일치</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td >{roundRank.fifthRank}명</td>
                            <td>당첨번호 3개 숫자일치</td>
                            <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }else{
        return null;
    }
  
}

export default LottoRank