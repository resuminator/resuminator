import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import ImageUploading from "react-images-uploading";
import { useToasts } from "react-toast-notifications";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0.8rem",
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor: theme.palette.primary.light,
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
}));

const ImageUpload = () => {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [image, setImage] = useState({
    value: JSON.parse(localStorage.getItem("user_image")),
    uploaded: false,
  });
  const maxMbFileSize = 10 * 1024 * 1024;

  const onChange = (imagelist) => {
    setImage({ uploaded: true, value: imagelist });
    localStorage.removeItem("user_image");
    localStorage.setItem("user_image", JSON.stringify(imagelist));
  };

  const onError = () => {
    addToast(
      "Some unexpected error occured while uploading the image. Please try again.",
      { appearance: "error", autoDismiss: true }
    );
  };

  return (
    <ImageUploading
      onChange={onChange}
      maxFileSize={maxMbFileSize}
      acceptType={["jpg", "gif", "png", "jpeg"]}
      onError={onError}
    >
      {({ onImageUpload }) => (
        <Avatar className={classes.avatar}>
          <IconButton className={classes.icon} onClick={onImageUpload}>
            {image.uploaded ? (
              <img
                src={image.value[0].dataURL}
                alt="User"
                className={classes.avatar}
              />
            ) : (
              <FiUpload />
            )}
          </IconButton>
        </Avatar>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
