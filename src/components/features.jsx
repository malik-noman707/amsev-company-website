// import React from "react";

// export const Features = (props) => {
//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Features</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//                   {" "}
//                   <div style={{padding:5, borderRadius:200,display:'flex', justifyContent:'center', alignItems:'center'}}>
//                     <div style={{ padding:20,height:120, width:120,display:'flex',alignSelf:'center', justifyContent:'center', borderRadius:200, backgroundColor:'#3D77B1'}}>
//                       <img style={{height:40,alignSelf:'center', width:40,}} src={d.img} alt="..." className="team-img" />
//                     </div>
//                   </div>
//                   <h3>{d.title}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-md-10 section-title">
            <h2>Features</h2>
            
          </div> */}
          <div className="features-heading">
            <h2>FEATURES</h2>
            <div className="heading-underline"></div>
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-6 col-md-3 feature-item">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">
                      <img src={d.img} alt={d.title} className="feature-img" />
                    </div>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
