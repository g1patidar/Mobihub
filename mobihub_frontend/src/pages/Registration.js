const Registration = () => {
  return (
    <>
      <div id="Secound_box2">
        <div id="Secound_first_box2">
          <div id="input_box_div2" >
            <div id="logo_img2">
              <img src="./images/main_logo.png" alt="" />
              {/* <h1>MobiHub</h1> */}
            </div>
            <h1 id="Wel_come2">Welcome Back</h1>
            <div id="Regi_with_Details2">
              <p>__</p>
              <h5>Registration with Your Detials</h5>
              <p>__</p>
            </div>
            <div id="Name_input2">
              <span>Name</span><br />
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div id="Last_Name2">
              <span>Last Name</span><br />
              <input type="text" placeholder="Enter Your Last  Name" />
            </div>
            <div id="Last_Name2">
              <span>Email</span><br />
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div id="Last_Name2">
              <span>Password</span><br />
              <input type="text" placeholder="Enter Your Password" />
            </div>
            <div id="Last_Name2">
              <span>Address</span><br />
              <input type="text" placeholder="Enter Your Address" />
            </div>
            <div id="keep_box2">
              <input type="checkbox" /> 
              &nbsp;&nbsp;
              <p id="Keep_line_box2">Keep me logged in </p>
            </div>
            <button id="Registration_btn2">
              <h1>Registration Now</h1>
            </button>
          </div>
        </div>
        <div id="Secound_sec_box2">

          <img src="./images/mobile_img.jpg" alt=" " />


          <img src="./images/login_image.jpg" alt=" " />

        </div>
      </div>
    </>
  );
}

export default Registration;