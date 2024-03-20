/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-deprecated */
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { useEffect } from 'react'
// import { useParams,useLocation } from 'react-router-dom'

// const CoinDetails = () => {

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
//                 const data =  await response.json() ;

//             } catch (error) {
//                 console.error('error:', error);
//             }
//         };

//   const  {coinId}  = useParams()
//  useEffect (()=>{
//          fetchData();
//  },[location])
//   return (
//     <div>
//       <h1>Defaultais</h1>
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CoinChart from "./CoinChart";

const coinDetails = ({ coin }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogsign, setDialogeSign] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [rating, setRating] = useState(0);
  const handleClickSign = () => {
    setDialogeSign(true);
  };

  const { coinId } = useParams();
  const location = useLocation();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coinId]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="container-fluid mt-2">
            <div className="row">
              <div className="col-12 col-md-4">
                <img src={data.image.small} alt={`${coinId}`} />
                <h1 className="px-2 d-inline-block">
                  {" "}
                  {coinId} <span className="text-secondary">{data.symbol}</span>
                </h1>

                <h2
                  className="fw-bold display-4 mt-2 "
                  style={{ fontSize: "1.5rem" }}
                >
                  {" "}
                  ${data.market_data.current_price.usd.toFixed(2)}{" "}
                  <span style={{ color: "red", fontSize: "0.8rem" }}>0.8%</span>
                </h2>
                <button
                  onClick={handleClickSign}
                  className=" btn btn-outline-primary w-100  add-to-profile"
                >
                  <FontAwesomeIcon className="mx-4" icon={faStar} />
                  Add to Profile
                </button>
                <div className="mb-2">
                  <div className="bg-light p-2">
                    <p style={{ display: "inline" }}>Market Cap:</p>
                    <p style={{ display: "inline", marginLeft: "2vw" }}>
                      ${data.market_data.market_cap.usd.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mb-2 ">
                  <div className="bg-light p-2">
                    <p style={{ display: "inline" }}>24 Hour Trading Vol:</p>
                    <p style={{ display: "inline", marginLeft: "2vw" }}>
                      ${data.market_data.total_volume.usd.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="bg-light p-2">
                    <p style={{ display: "inline" }}>Circulating Supply:</p>
                    <p style={{ display: "inline", marginLeft: "2vw" }}>
                      {data.market_data.circulating_supply.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="bg-light p-2">
                    <p style={{ display: "inline" }}>Total Supply:</p>
                    <p style={{ display: "inline", marginLeft: "2vw" }}>
                      {data.market_data.total_supply.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="bg-light p-2">
                    <p style={{ display: "inline" }}>Max Supply:</p>
                    <p style={{ display: "inline", marginLeft: "2vw" }}>
                      {data.market_data.max_supply.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{ color: i < rating ? "gold" : "grey" }}
                      onClick={() => setRating(i + 1)}
                    />
                  ))}
                  <span style={{ marginLeft: "10px" }}>{rating}</span>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-4">
                {/* {coin && <CoinChart marketCapRank={coin.market_cap_rank} />} */}
              </div>
            </div>
          </div>
          {/*containerfuid coli */}
        </div>
      )}

      <Dialog open={dialogsign} onClose={() => setDialogeSign(false)}>
        <div className="container ">
          <div className="row">
            <div className="col-10 text-center m-2 ">
              <div className="btn border-0 border-bottom mx-3">Log in </div>
              <div
                onClick={handleClickSign}
                className="btn border-0 border-bottom mx-3"
              >
                Sign Up{" "}
              </div>
            </div>
            <div className="col-1 m-1">
              <div
                className="btn btn-close text-danger border-0"
                onClick={() => setDialogeSign(false)}
              ></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto center">
          <FormControl sx={{ m: 1, width: "65ch" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-email"
              style={{ color: "white" }}
            >
              Email Address
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              placeholder="Enter your email address..."
              endAdornment={
                <InputAdornment position="center">
                  <IconButton
                    aria-label="toggle email visibility"
                    helperText="Please enter your email"
                    label="Email"
                  ></IconButton>
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>

          <FormControl
            sx={{
              m: 1,
              width: "65ch",
              position: "relative",
              paddingLeft: "",
            }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Password
            </InputLabel>
            <span
              className="text-secondary"
              style={{
                marginLeft: 300,
                position: "absolute",
                top: "-10px",
                right: "0",
              }}
            >
              Forget password?
            </span>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              endAdornment={
                <InputAdornment position="center">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <utton
            height="45"
            className=" btn btn-primary bg-primary text-white d-block w-100 mt-3"
            color="inherit"
          >
            Log In
          </utton>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50px" }}
          >
            <p>OR</p>
          </div>
          <button className="btn bg-transparent btn-outline-primary text-white d-block w-100 mt-2">
            <img
              width="25"
              height="25"
              loading="lazy"
              className="img-fluid mx-2"
              src="https://static.coingecko.com/s/google-167c1e093ccfc014420e14da91325a1f70c91e592f58164fefe84603d2fde02e.svg"
            ></img>
            Continue With Google
          </button>
          <button className="btn bg-transparent btn-outline-primary text-white d-block w-100 mt-3 mb-3">
            <img
              width="25"
              height="25"
              loading="lazy"
              className="img-fluid mx-2"
              src="https://static.coingecko.com/s/apple_black-6d9a519c69649e1a56774f4036ec552e412e73d5f9c2b0bab193732e47721533.svg"
            ></img>
            Continue With Apple
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default coinDetails;
