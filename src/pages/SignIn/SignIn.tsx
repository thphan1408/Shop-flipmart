import React from 'react'

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <>
      <div className="body-content">
        <div className="Container">
          <div className="sign-in-page">
            <div className="row">
              {/* Sign-in */}
              <div className="col-md-6 col-sm-6 sign-in">
                <h4>Sign in</h4>
                <p>Hello, Welcome to your account.</p>
                <div className="social-sign-in outer-top-xs">
                  <a href="#" className="facebook-sign-in">
                    <i className="fa fa-facebook" /> Sign In with Facebook
                  </a>
                  <a href="#" className="google-sign-in">
                    <i className="fa fa-google" /> Sign In with Google
                  </a>
                </div>
                <form className="register-form outer-top-xs" role="form">
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleInputEmail1">
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="info-title"
                      htmlFor="exampleInputPassword1"
                    >
                      Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="radio outer-xs">
                    <label>
                      <input
                        type="radio"
                        name="optionsRadios"
                        id="optionsRadios2"
                        defaultValue="option2"
                      />
                      Remember me!
                    </label>
                    <a href="#" className="forgot-password pull-right">
                      Forgot your Password?
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-upper btn btn-primary checkout-page-button"
                  >
                    Login
                  </button>
                </form>
              </div>
              {/* Sign-in */}
              {/* create a new account */}
              <div className="col-md-6 col-sm-6 create-new-account">
                <h4 className="checkout-subtitle">Create a new account</h4>
                <p className="text title-tag-line">Create your new account.</p>
                <form className="register-form outer-top-xs" role="form">
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleInputEmail2">
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputEmail2"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleInputEmail1">
                      Name <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleInputEmail1">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleInputEmail1">
                      Password <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleInputEmail1">
                      Confirm Password <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-upper btn btn-primary checkout-page-button"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              {/* create a new account */}
            </div>
            {/* /.row */}
          </div>
          {/* /.sigin-in*/}
          {/* ============================================== BRANDS CAROUSEL ============================================== */}
          <div id="brands-carousel" className="logo-slider wow fadeInUp">
            <div className="logo-slider-inner">
              <div
                id="brand-slider"
                className="owl-carousel brand-slider custom-carousel owl-theme"
              >
                <div className="item m-t-15">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand1.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item m-t-10">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand2.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand3.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand4.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand5.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand6.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand2.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand4.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand1.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand5.png"
                      src="assets\images\blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
              </div>
              {/* /.owl-carousel #logo-slider */}
            </div>
            {/* /.logo-slider-inner */}
          </div>
          {/* /.logo-slider */}
          {/* ============================================== BRANDS CAROUSEL : END ============================================== */}
        </div>
        {/* /.container */}
      </div>
    </>
  )
}

export default SignIn
