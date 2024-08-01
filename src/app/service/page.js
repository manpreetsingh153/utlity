import React from "react";
import "./page.css";

const page = () => {
  return (
    <div>
      <section className="we-offer-area text-center bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-heading text-center">
                <h2>
                  What we <span>Offer {process.env.NAME}</span>
                </h2>
                <h4>Lorem Ipsum is simply dummy text</h4>
              </div>
            </div>
          </div>
          <div className="row our-offer-items less-carousel">
            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-pen-fancy" />
                <h4>Project creation</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-dharmachakra" />
                <h4>Software Development</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-tasks" />
                <h4>Porject Management</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-tachometer-alt" />
                <h4>Porject Impliment</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-recycle" />
                <h4>Software Update</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-headset" />
                <h4>24/7 Support</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
