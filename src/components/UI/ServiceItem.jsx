import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/service-item.css";

const ServiceItem = (props) => {
  const { imgUrl, model, itemName, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="service__item">
        <div className="service__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="service__item-content mt-4">
          <h4 className="section__title text-center">{itemName}</h4>
          <h6 className="rent__price text-center mt-">
            Rs {price}.00 <span>/ Repair</span>
          </h6>

          <div className="service__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-tools-line"></i> {model}
            </span>
          </div>

          <button className="w-50 service__item-btn service__btn-rent">
            <Link to={`/services/${itemName}`}>Book Services</Link>
          </button>

          <button className="w-50 service__item-btn service__btn-details">
            <Link to={`/services/${itemName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );  
};

export default ServiceItem;


















// import React from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../../styles/service-item.css";

// const ServiceItem = (props) => {
//   const { imgUrl, model, serviceName, automatic, speed, price } = props.item;
  

//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="service__item">
//         <div className="service__img">
//           <img src={imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="service__item-content mt-4">
//           <h4 className="section__title text-center">{serviceName}</h4>
//           <h6 className="rent__price text-center mt-">
//             ${price}.00 <span>/ Repair</span>
//           </h6>

//           <div className="service__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
//             <span className=" d-flex align-items-center gap-1">
//             <i class="ri-tools-line"></i> {model}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-settings-2-line"></i> {automatic}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-timer-flash-line"></i> {speed}
//             </span>
//           </div>

//           <button className=" w-50 service__item-btn service__btn-rent">
//             <Link to={`/services/${serviceName}`}>Book Services</Link>
//           </button>

//           <button className=" w-50 service__item-btn service__btn-details">
//             <Link to={`/services/${serviceName}`}>Details</Link>
//           </button>
//         </div>
//       </div>
//     </Col>
//   );
// };

// export default ServiceItem;


