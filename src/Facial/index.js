import React, { useState } from "react";
import Webcam from "react-webcam";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SignatureCanvas from "react-signature-canvas";
import ReactLoading from "react-loading";

import Message from "../Message";
import Header from "../Header";

import { PostFacialAPI } from "../api";

// const useStyle = makeStyles(theme => ({
//   cam: {
//     border: "1px solid red"
//   }
// }));
function Facial() {
  const [count, setCount] = useState(1);

  const [state, setState] = useState("success");

  const [message, setMessage] = useState("");

  const [showMessage, setShowMessage] = useState(false);

  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState("img");

  //   const classes = useStyle();
  const webcamRef = React.useRef(null);
  //   const capture = React.useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //   }, [webcamRef]);

  const pad = React.useRef(null);
  const getPad = React.useCallback(() => {
    const src = pad.current.toDataURL();
    pad.current.clear();
    console.log(src);
  }, [pad]);

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography>
              Place your face in the center of the frame.{" "}
            </Typography>
            <Typography>Click Take when ready. </Typography>
          </Grid>
          {loading && (
            <Grid item xs={2}>
              <ReactLoading type="spinningBubbles" color="#3f51b5" />
            </Grid>
          )}
          <Grid item xs={12}>
            {!loading && (
              <Message
                variant={state}
                message={message}
                open={showMessage}
                onClose={() => setShowMessage(false)}
              />
            )}
          </Grid>
          {mode === "img" ? (
            <Paper>
              {!loading && (
                <Grid item xs={12}>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={530}
                  />
                </Grid>
              )}
            </Paper>
          ) : (
            <Paper>
              {!loading && (
                <Grid item xs={12}>
                  <SignatureCanvas
                    ref={pad}
                    canvasProps={{
                      width: 530,
                      height: 268,
                      className: "sigCanvas"
                    }}
                  />
                </Grid>
              )}
            </Paper>
          )}
          <Grid item xs={6}>
            {/* <Button color="primary" variant="contained" onClick={capture}>
          Take
        </Button> */}
            <Button
              color="primary"
              variant="contained"
              disabled={loading}
              onClick={() => {
                setLoading(true);
                
                if (mode === "img") {
                  const imageSrc = webcamRef.current.getScreenshot();
                  PostFacialAPI({ count: count, image:imageSrc })
                    .then(res => {
                      setTimeout(() => {
                        setState(res.state);
                        setMessage(res.message);
                        setCount(count + 1);
                        setMode(res.mode);
                        setShowMessage(true);
                        setLoading(false);
                      }, 1000);
                    })
                    .catch(err => {
                      console.log(err);
                    });
                } else {
                  // getPad();
                  const imageSrc = pad.current.toDataURL();
                  pad.current.clear();
                }
                
                
                
              }}
              fullWidth
            >
              {mode === "img" ? "Take" : "Sign"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Facial;
