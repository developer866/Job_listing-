import React from "react";
import "./Form.css";
import image from "../images/icon-calculator.svg";

function Form(props) {
  const { handleChange, handleSubmit, inputs, clearForm } = props;

  return (
    <div className="form">
      <div>
        <h2>Mortgage Calculator</h2>
        <button onClick={clearForm} className="clear">
          Clear All
        </button>
      </div>

      {/* Form */}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <p>Mortgage Amount</p>
          <div className="alternative">
            <div className="B_inverse B">
              <p>€</p>
            </div>
            <div className="A">
              <input
                // type="number"
                name="amount"
                value={inputs.amount}
                placeholder=""
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p>Mortgage Term</p>
          <div className="alternative">
            <div className="A">
              <input
                // type="number"
                name="term"
                value={inputs.term}
                onChange={handleChange}
                placeholder=""
                required
              />
            </div>
            <div className="B">
              <p>years</p>
            </div>
          </div>
        </div>

        <div>
          <p>Interest Rate</p>
          <div className="alternative">
            <div className="A">
              <input
                type="text"
                placeholder=""
                step="0.01"
                name="interestRate"
                value={inputs.interestRate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="B">
              <p>%</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mortgage_p">Mortgage Type</p>
          <label className="Mortage_type_radio">
            <input
              type="radio"
              value="Repayment"
              name="type"
              checked={inputs.type === "Repayment"}
              onChange={handleChange}
              id=""
              placeholder="Repayemnt"
            />
            <p>Repayment</p>
          </label>
          <label className="Mortage_type_radio">
            <input
              type="radio"
              name="type"
              value="interestOnly"
              checked={inputs.type === "interestOnly"}
              onChange={handleChange}
              id=""
              placeholder="Repayemnt"
            />
            <p>Interest Only</p>
          </label>
        </div>

        <div>
          <button className="Calculate_Repayment" type="submit">
            <img src={image} alt="" srcset="" />
            <p>Calculate Repayments</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
