import { Store } from "react-notifications-component";

const ShowError = (errorCode) => {
  Store.addNotification({
    title: "Thông báo",
    message: errorCode,
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

const ShowSuccess = (successCode) => {
  Store.addNotification({
    title: "Thông báo",
    message: successCode,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export { ShowError, ShowSuccess };
