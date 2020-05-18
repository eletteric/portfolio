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
    profileImage,
    setProfileImage,
    profileImageUrl,
    setProfileImageUrl,
  } = useContext(UserContext);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [imgChosen, setImgChosen] = useState(false);
  const [preview, setPreview] = useState([]);

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
            setProfileImageUrl(url);
          });
      }
    );
  };

  return (
    <React.Fragment>
      {imgChosen ? (
        <React.Fragment>
          <img
            src={preview || "http://via.placeholder.com/160x160"}
            alt="profile picture"
            height="160"
            width="160"
          />
          <br/>
          <Typography variant="caption">preview</Typography>
          <br/>
          <br/>
          <LinearProgress
            variant="determinate"
            value={uploadProgress}
            color="secondary"
            max="100"
            style={{margin:'0% 20%'}}
          />
          <br/>
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload image
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>

                <img
            src={profileImageUrl || "http://via.placeholder.com/160x160"}
            alt="profile picture"
            height="160"
            width="160"
          />
          <br/>
          <br/>
        <Button variant="contained" component="label">
          Choose image
          <input
            type="file"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Button>
        </React.Fragment>
      )}

      <br />
      <br />
    </React.Fragment>
  );
};

export default ImageUpload;
