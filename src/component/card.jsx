import React from "react";
import "./Card.css";


function Card({ Data }) {
  return (
    <div>
      {Data.map((data) => (
        <div key={data.id}>
          <div
            className="Container"
            style={{
              borderLeft:
                data.featured && data.new
                  ? "4px solid hsl(180, 29%, 50%)"
                  : "none",
            }}
          >
            <div className="Section_A">
              {/* Logo */}
              <div className="Logo"><img src={data.logo} alt="images" /> </div>
              {/* Details */}
              <div className="Details">
                <div className="CompanyName">
                  <div className="name">{data.company}</div>
                  <div>{data.new && <div className="new">New!</div>}</div>
                  <div>
                    {data.featured && <div className="Feature">Featured</div>}
                  </div>
                </div>

                {/* position */}
                <div className="Position">{data.position}</div>

                {/* Time and location */}
                <div className="Time">
                  <div>{data.postedAt} </div>
                  <div>.</div>
                  <div>{data.contract}</div>
                  <div>.</div>
                  <div>{data.location}</div>
                </div>
              </div>
            </div>

            {/* stacks */}
            <div className="Stack">
              <ul>
                <li>{data.role}</li>
                <li>{data.level}</li>
                <>
                  {data.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </>
                <>
                  {data.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
