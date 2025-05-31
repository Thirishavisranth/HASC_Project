import React, { useEffect } from "react";
import serviceData from "../assets/data/repairData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const ServiceDetails = () => {
  const { slug } = useParams();
  //console.log("Slug:", slug);

  const singleServiceItem = serviceData.find((item) => item.itemName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleServiceItem]);

  return (
    <Helmet title={singleServiceItem.serviceName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleServiceItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="services__info">
                <h2 className="section__title">{singleServiceItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Rs{singleServiceItem.price}.00 / Repair
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleServiceItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleServiceItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-tools-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleServiceItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleServiceItem.brand}
                  </span>

                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleServiceItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleServiceItem.speed}
                  </span> */}
                </div>

                {/* <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleServiceItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleServiceItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleServiceItem.brand}
                  </span>
                </div> */}
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ServiceDetails;


















// import React, { useEffect } from "react";

// import serviceData from "../assets/data/repairData";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import { useParams } from "react-router-dom";
// import BookingForm from "../components/UI/BookingForm";
// import PaymentMethod from "../components/UI/PaymentMethod";

// const ServiceDetails = () => {
//   const { slug } = useParams();
//   //console.log("Slug:", slug);

//   const singleServiceItem = serviceData.find((item) => item.carName === slug);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [singleServiceItem]);

//   return (
//     <Helmet title={singleServiceItem.serviceName}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6">
//               <img src={singleServiceItem.imgUrl} alt="" className="w-100" />
//             </Col>

//             <Col lg="6">
//               <div className="services__info">
//                 <h2 className="section__title">{singleServiceItem.carName}</h2>

//                 <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
//                   <h6 className="rent__price fw-bold fs-4">
//                     ${singleServiceItem.price}.00 / Task
//                   </h6>

//                   <span className=" d-flex align-items-center gap-2">
//                     <span style={{ color: "#f9a826" }}>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                     </span>
//                     ({singleServiceItem.rating} ratings)
//                   </span>
//                 </div>

//                 <p className="section__description">
//                   {singleServiceItem.description}
//                 </p>

//                 <div
//                   className=" d-flex align-items-center mt-3"
//                   style={{ columnGap: "4rem" }}
//                 >
//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-roadster-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleServiceItem.model}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-settings-2-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleServiceItem.automatic}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-timer-flash-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleServiceItem.speed}
//                   </span>
//                 </div>

//                 <div
//                   className=" d-flex align-items-center mt-3"
//                   style={{ columnGap: "2.8rem" }}
//                 >
//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
//                     {singleServiceItem.gps}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-wheelchair-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleServiceItem.seatType}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-building-2-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleServiceItem.brand}
//                   </span>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="7" className="mt-5">
//               <div className="booking-info mt-5">
//                 <h5 className="mb-4 fw-bold ">Booking Information</h5>
//                 <BookingForm />
//               </div>
//             </Col>

//             <Col lg="5" className="mt-5">
//               <div className="payment__info mt-5">
//                 <h5 className="mb-4 fw-bold ">Payment Information</h5>
//                 <PaymentMethod />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default ServiceDetails;



