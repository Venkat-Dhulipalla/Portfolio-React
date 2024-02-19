import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Contact = () => {
  return (
    <>
      {}
      {}
      <div className="contact container-fluid">
        <div className="container contact_main gx-0">
          <div className="row text-center gx-0 pb-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>
                <img src={icon1} alt="" />
                GET IN TOUCH
                <img src={icon2} alt="" />
              </h1>
              <p>Please fill the form or email me to get in touch</p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0 align-items-center">
            <div className="col-lg-7 text-center">
              {}
              <div className="row gx-0">
                <div className="col-lg-6 gx-0">
                  <div className="contact_fm_1" data-aos="fade-left">
                    <i className="fa-solid fa-phone"></i>
                    <h4>Phone No</h4>
                    <h6>+1 9408433274</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact_fm_1" data-aos="fade-left">
                    <i className="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                    <h6>Venkatdhulipalla21@gmail.com</h6>
                  </div>
                </div>
              </div>
              {/* ************************* */}
              <div className="row gx-0">
                <div className="col-lg-12">
                  <div className="contact_fm_1">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>Address</h4>
                    <h6>Dallas,Texas</h6>
                    {
                      <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dallas,%20TX,%20USA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    }
                  </div>
                </div>
              </div>
              {/* ************************* */}
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              <div className="contact_sec2">
                <form action="https://formspree.io/f/xzbnrkro" method="POST">
                  {/* <form action="https://formspree.io/f/xjvqvwyo" method="POST"> */}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Subject Here"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message*
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="textarea"
                      placeholder="Type Your Message Here"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact_btn">
                    Let's Talk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****************** */}
    </>
  );
};

export default Contact;
