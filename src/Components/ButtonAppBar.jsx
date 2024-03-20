/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, AppBar, Toolbar } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faGear } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import { useParams, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "inline-block",
    margin: 5,
    backgroundColor: "black",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    minHeight: "50px",
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  const [selectedAge, setSelectedAge] = useState(10);
  const [dialog, setDialoge] = useState(false);
  const [dialogsign, setDialogeSign] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [highlights, setHighlights] = useState(false);
  const [more, setMore] = useState(false);
  const [cryptosData, setCryptosData] = useState(null);
  const coinId = "bitcoin";
  const fetchData = async () => {
    const cryptosResponse = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    const cryptosData = await cryptosResponse.json();
    setCryptosData(cryptosData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClickSign = () => {
    setDialoge(true);
  };
  const handleClickLog = () => {
    setDialogeSign(true);
  };

  return (
    <>
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className={classes.appBar}>
                  <Toolbar>
                    <Typography variant="h7" className="m-3">
                      Cryptos:
                      <span className="text-primary">
                        ({cryptosData?.name})
                      </span>
                    </Typography>
                    <Typography variant="h8" className="">
                      Exchanges:
                      <span className="text-primary">
                        ({cryptosData?.market_data?.market_cap_rank})
                      </span>
                    </Typography>
                    <Typography variant="h8" className="m-3">
                      Market Cap:
                      <span className="text-primary">$2.64T</span>
                    </Typography>
                    <Typography variant="h8" className="m-1 text-success">
                      7.5%
                    </Typography>
                    <Typography variant="h8" className="mx-2">
                      24h Vol: <span className="text-primary">$151.02B</span>
                    </Typography>
                    <Typography variant="h8" className="mx-2">
                      Dominance:{" "}
                      <span className="text-primary">BTC:51.5% ETH:17.0%</span>
                    </Typography>
                    <Typography variant="h8" className="mx-1">
                      ETH Gas: <span className="text-primary">38 GWEI</span>
                    </Typography>

                    <Typography>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <Select
                          id="demo-simple-select"
                          value={selectedAge}
                          label="Age"
                          onChange={(event) =>
                            setSelectedAge(event.target.value)
                          }
                        >
                          <MenuItem value={10}>English</MenuItem>
                          <MenuItem value={20}>Persian</MenuItem>
                          <MenuItem value={30}>French</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                    <Typography variant="h5" className="m-2">
                      <FontAwesomeIcon
                        icon={faGem}
                        style={{ color: "#74C0FC" }}
                      />
                    </Typography>

                    <Button
                      color="inherit"
                      onClick={handleClickLog}
                      className="m-2 btn btn-outline-primary rounded rounded-3 border border-primary text-primary"
                    >
                      Log in
                    </Button>
                    <Button
                      className=" btn btn-primary text-bg-primary rounded rounded-3"
                      color="inherit"
                      onClick={handleClickSign}
                    >
                      Sign Up
                    </Button>
                    <Button style={{}} color="inherit">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "#4d0046" }}
                      />
                    </Button>
                  </Toolbar>
                </AppBar>
              </Box>
              <>
                <Dialog open={dialog} onClose={() => setDialoge(false)}>
                  <div className="container ">
                    <div className="row">
                      <div className="col-10 text-center m-2 ">
                        <div
                          onClick={handleClickLog}
                          className="btn border-0 border-bottom mx-3"
                        >
                          Log in{" "}
                        </div>
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
                          onClick={() => setDialoge(false)}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto center">
                    <FormControl
                      sx={{ m: 1, width: "65ch" }}
                      variant="outlined"
                    >
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>

                    <Button
                      height="45"
                      className=" btn btn-primary bg-primary text-white d-block w-100 mt-3"
                      color="inherit"
                    >
                      Sign Up
                    </Button>

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

                <Dialog open={dialogsign} onClose={() => setDialogeSign(false)}>
                  <div className="container ">
                    <div className="row">
                      <div className="col-10 text-center m-2 ">
                        <div
                          onClick={handleClickLog}
                          className="btn border-0 border-bottom mx-3"
                        >
                          Log in{" "}
                        </div>
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
                          onClick={() => setDialogLog(false)}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto center">
                    <FormControl
                      sx={{ m: 1, width: "65ch" }}
                      variant="outlined"
                    >
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>

                    <Button
                      height="45"
                      className=" btn btn-primary bg-primary text-white d-block w-100 mt-3"
                      color="inherit"
                    >
                      Log In
                    </Button>

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
              </>
            </div>
          </div>
        </div>
      </>

      <div className="container mt-4">
        <Typography variant="h4" className="fw-bold" gutterBottom>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <div className="row">
          <div className="col-8">
            <Typography variant="body1" style={{ color: "#C0C0C0" }}>
              The global cryptocurrency market cap today is $2.72 Trillion, a{" "}
              <span className="text-success">2.9%</span> change in the last 24
              hours.{" "}
              <a href="#" onClick={() => setMore(!more)}>
                Read more
              </a>
              {more && (
                <p>
                  Total cryptocurrency trading volume in the last day is at $165
                  Billion. Bitcoin dominance is at 49.4% and Ethereum dominance
                  is at 16.1%. CoinGecko is now tracking 13,361
                  cryptocurrencies. The largest gainers in the industry right
                  now are Artificial Intelligence (AI) and AI-Themed Coins
                  cryptocurrencies.
                </p>
              )}
            </Typography>
          </div>
          <div className="col-4">
            <FormControlLabel
              value="Highlights
          "
              control={
                <Switch
                  color="primary"
                  onChange={() => setHighlights(!highlights)}
                />
              }
              label={<span style={{ color: "blue" }}>Highlights</span>}
              labelPlacement="start"
            />
          </div>
        </div>
        {highlights && (
          <div className="cart row mt-5">
            <div className="col-12 col-md-4">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Typography variant="h6">$2,722,633,827,846</Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#C0C0C0" }}
                    >
                      Market Cap 2.9%
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text-secondary">
                    <Grid item xs={6}>
                      <Typography variant="h6">$164,396,034,726</Typography>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#C0C0C0" }}
                      >
                        24h Trading Volume
                      </Typography>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    🔥 Trending
                  </Typography>
                  <List>
                    <ListItem>
                      <img
                        alt="GALA"
                        src="https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869"
                        width="24"
                        height="24"
                      />
                      <ListItemText
                        className="mx-2"
                        primary="GALA"
                        secondary="$0.063 77.6%"
                      />
                    </ListItem>
                    <ListItem>
                      <img
                        alt="Orion"
                        src="https://assets.coingecko.com/coins/images/11841/standard/new_logo.jpeg?1696511712"
                        width="24"
                        height="24"
                      />
                      <ListItemText
                        className="mx-2"
                        primary="Orion"
                        secondary={
                          <React.Fragment>
                            $2.89{" "}
                            <span style={{ paddingLeft: "5px" }}>21.5%</span>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <img
                        alt="SafeDeal"
                        src="https://assets.coingecko.com/coins/images/12661/standard/Eb2xbVb.png?1696512467"
                        width="24"
                        height="24"
                      ></img>
                      <ListItemText
                        className="mx-2"
                        primary="SafeDeal"
                        secondary="$2.69 50.2%"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    🚀 Largest Gainers
                  </Typography>
                  <List>
                    <ListItem>
                      <img
                        alt="SafeDeal"
                        className=""
                        src="https://assets.coingecko.com/coins/images/12661/standard/Eb2xbVb.png?1696512467"
                        width="24"
                        height="24"
                      ></img>
                      <ListItemText
                        className="mx-2"
                        primary="SafeDeal"
                        secondary="$2.69 50.2%"
                      />
                    </ListItem>
                    <ListItem>
                      <img
                        alt="Solama"
                        className=""
                        src="https://assets.coingecko.com/coins/images/34218/standard/IMG_20240101_195943_869.jpg?1704278901"
                        width="24"
                        height="24"
                      />
                      <ListItemText
                        className="mx-2"
                        primary="Solama"
                        secondary="$0.064 161.8%"
                      />
                    </ListItem>
                    <ListItem>
                      <img
                        alt="Orion"
                        src="https://assets.coingecko.com/coins/images/11841/standard/new_logo.jpeg?1696511712"
                        width="24"
                        height="24"
                      />
                      <ListItemText
                        className="mx-2"
                        primary="AI Network"
                        secondary="$0.125 157.8%"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonAppBar;
