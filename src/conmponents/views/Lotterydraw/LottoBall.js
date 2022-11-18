import React from "react";
import "./lotto.css";
import { Col, Row } from "react-bootstrap";

function LottoBall(props) {
  const { LottoBall } = props;

  const Ball = (props) => {
    const { number, color } = props;

    return (
      <div className="lotto-ball" style={{ backgroundColor: color }}>
        {number}
      </div>
    );
  };

  const selectColor = (number) => {
    let color = "red";

    if (number < 10) {
      color = "yellow";
    } else if (number < 20) {
      color = "blue";
    } else if (number < 30) {
      color = "red";
    } else if (number < 40) {
      color = "gray";
    } else {
      color = "green";
    }
    return color;
  };

  const LottoballNums =()=> 
    LottoBall?.map((lottoball, index) => {
    return (
      //로또 번호 6+1
      <Row key={index}>
        <Col>
          <div className="d-flex">
            {Object.values(lottoball).map((number) => {
              return (
                <Ball
                  key={number}
                  number={number}
                  color={selectColor(number)}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    );
  });

  return (
    <Row>
      <Col>{LottoBall && <LottoballNums/>}</Col>
    </Row>
  );
}

export default LottoBall;
