import React, { useContext, useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { UserContext } from "../contexts/UserContext";
import firebase from "../services/firebase";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import { storage } from "../services/firebase";

const ImageUpload = (props) => {
  const {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    profileImageUrl,
    setProfileImageUrl,
    myself,
    setMyself,
  } = useContext(UserContext);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [imgChosen, setImgChosen] = useState(false);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [preview, setPreview] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const myState = Object.assign([], myself);

  // myself is an array of 1 object (UserContext State), declare the array myState and assign the array myself

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const pic = e.target.files[0];
      setProfileImage(pic);
      setImgChosen(true);
      var reader = new FileReader();
      var url = reader.readAsDataURL(pic);
      reader.onloadend = function (e) {
        setPreview([reader.result]);
        console.log(url);
      };
    } else return;
  };

  const handleUpload = (e) => {
    const uploadTask = storage
      .ref(`profilepicture/${profileImage.name}`)
      .put(profileImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        /* progress function */
        const percentTransfer = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(percentTransfer);
        setUploadInProgress(true);
      },
      (error) => {
        console.log(error);
      },
      () => {
        /*complete function*/
        storage
          .ref("profilepicture")
          .child(profileImage.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            myState[0].picture.path = url;
            setMyself(myState);
          });

        setTimeout(() => {
          setUploadInProgress(false);
          setImgChosen(false);
        }, 2000);
      }
    );
  };

  return (
    <React.Fragment>
      <Container>
        <Typography variant="overline">Profile picture</Typography>
      </Container>
      {imgChosen ? (
        <React.Fragment>
          <img
            src={preview || "http://via.placeholder.com/160x160"}
            alt="profile picture"
            height="160"
            width="160"
          />
          <br />
          <Typography variant="caption">preview</Typography>
          <br />
          <br />
          {uploadInProgress ? (
            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              color="secondary"
              max="100"
              style={{ margin: "0% 20%" }}
            />
          ) : (
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload image
            </Button>
          )}

          <br />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img
            src={
              myState[0].picture.path || "http://via.placeholder.com/160x160"
            }
            alt="profile picture"
            height="160"
            width="160"
          />
          <br />
          <br />
          <Button variant="contained" component="label">
            Change image
            <input
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ImageUpload;
