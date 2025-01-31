import React from "react";
import image from "../images/illustration-empty.svg";
import "./Result.css"

function Result(props) {
  const { result, submitValue } = props;

  return (
    <div>
      {submitValue ? (
        <div className="result">
          <h2>Your Results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the result, edit the form and click "calculate repayments"
            again{" "}
          </p>
          <div>
            <p>Your montly Repayments</p>
            <h2>E{result.monthlyRepayment}</h2>
            <hr />
            <p>Total you will repay over the term</p>
            <h2>{result.totalRepayment}</h2>
          </div>
        </div>
      ) : (
        <div className="Result-empty">
          <img src={image} alt="myimage" srcset="" />
          <h1>Result are show here</h1>
          <p>complete form and click "calculate <br></br> repayments" to see what your monthly repayments would be.</p>
        </div>
      )}
    </div>
  );
}

export default Result;
