import React from "react";
//import Header from "./Header";
import styles from "../styles/user.css";
import { Paper, Box, Avatar, Button } from "@mui/material";
import { BsFillPersonFill, BsClockHistory } from "react-icons/bs";
import { FaAmazonPay } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import TextField from "@mui/material/TextField";
//import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <div
      style={{
        // backgroundImage:
        //   'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
    
      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 300,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={3} className="paperpp">
              <div className="ava">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100, marginTop: "40px",backgroundColor:'#ADD8E6',color: '#000055'}}
                />
              </div>
              <div className="small_det">
                <h4 className="u_name">Ruthu</h4>
      
              </div>
              <div className="cont">
                <div className="i">
                  <BsFillPersonFill />
                  <div style={{ marginLeft: "30px" }}>Personal Information</div>
                </div>
                <div className="i">
                  <BsClockHistory />
                  <div style={{ marginLeft: "30px" }}>Booking History</div>
                </div>
                <div className="i">
                  <FaAmazonPay />
                  <div style={{ marginLeft: "30px" }}>Payment</div>
                </div>
                <div className="i">
                  <TbJewishStarFilled />
                  <div style={{ marginLeft: "30px" }}>Preferences</div>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="dett">
          <Box
            className="box2"
            sx={{
              "& > :not(style)": {
                width: 800,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={3} className="paperpp2">
              <div className="wholeright">
                <div className="headprofile">Personal Information</div>
                <div className="contentpro">
                  <div className="stcol">
                    <TextField
                      id="outlined-basic"
                      label="Ruthu"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="6382914478"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="3E,North Street,trichy"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Tamil nadu"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </div>
                  <div className="ndcol">
                    <TextField
                      id="outlined-basic"
                      label="demo@gmail.com"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="trichy"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="621105"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Indian"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        }, //for the box
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </div>
                </div>

                <div className="buttonpro1" style={{justifyContent:'center',display:'flex',marginTop:'30px'}}>
                <Button className="buttonpro"variant="outlined" style={{backgroundColor:"#ADD8E6",color:'#000055',borderRadius:'10px',fontSize:'medium'}}>Save Changes</Button>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;