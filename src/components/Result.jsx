import React from "react";
import image from "../images/illustration-empty.svg";
import "./Result.css";

function Result(props) {
  const { result, submitValue } = props;

  return (
    <div className="container">
      {submitValue ? (
        <div >
          <div className="result">
            <h2 className="your_result">Your Results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the result, edit the form and click "calculate
              repayments" again
            </p>
            <div className="result_calculated">
              <p>Your montly Repayments</p>
              <h2 className="h2_Repayment">€{result.monthlyRepayment}</h2>
              <hr />
              <p>Total you will repay over the term</p>
              <h2 className="h2_total">€{result.totalRepayment}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="Result-empty ">
            <img src={image} alt="myimage" srcset="" />
            <h2 className="show">Result are show here</h2>
            <p>
              Complete form and click "calculate <br></br> repayments" to see
              what your monthly repayments would be.
            </p>

          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
