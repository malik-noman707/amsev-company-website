import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          Empowering your business with innovative lead generation, 
          <br />seamless IT management, efficient taxi dispatch systems, and custom software solutions.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4  service-container">
                  {" "}
                  <div style={{padding:5, borderRadius:200,display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{ padding:20,height:120, width:120,display:'flex',alignSelf:'center', justifyContent:'center', borderRadius:200, backgroundColor:'#3D77B1'}}>
                      <img style={{height:40,alignSelf:'center', width:40,}} src={d.img} alt="..." className="team-img" />
                    </div>
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
