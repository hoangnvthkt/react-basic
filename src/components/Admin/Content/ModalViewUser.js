import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import _ from "lodash";

const ModalViewUser = (props) => {
  const { show, setShow, dataUpdate } = props;

  const handleClose = () => {
    // setUserName("");
    // setEmail("");
    // setImage("");
    // setPassword("");
    // setRole("USER");
    setPreviewImage("");
    setShow(false);
    // setDataUpdate({});
    // console.log("check dataUpdate", dataUpdate);
  };
  // const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  //   const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      //update state

      setEmail(dataUpdate.email);
      setUserName(dataUpdate.username);
      //   setImage("");
      setRole(dataUpdate.role);
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

  //   const handleUploadImage = (event) => {
  //     if (event.target && event.target.files && event.target.files[0]) {
  //       setPreviewImage(URL.createObjectURL(event.target.files[0]));
  //       setImage(event.target.files[0]);
  //     } else {

  //     }
  //   };

  //   const validateEmail = (email) => {
  //     return String(email)
  //       .toLowerCase()
  //       .match(
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       );
  //   };
  //   const handleSubmitCreateUser = async () => {
  //     const isValidEmail = validateEmail(email);
  //     if (!isValidEmail) {
  //       toast.error("Invalid email");
  //       return;
  //     }

  // if (!password) {
  //   toast.error("Invalid password");
  //   return;
  // }

  // let data = {
  //   email: email,
  //   username: userName,
  //   password: password,
  //   role: role,
  //   userImage: image,
  // };
  // console.log({ data });

  //     let data = await putUpdateUser(dataUpdate.id, userName, role, image);

  //     if (data && data.EC === 0) {
  //       toast.success(data.EM);
  //       handleClose();
  //       await fetchListUser();
  //     }

  //     if (data && data.EC !== 0) {
  //       toast.error(data.EM);
  //     }
  //   };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">User name</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                disabled
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">ROLE</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
                disabled
              >
                <option selected value={"USER"}>
                  USERS
                </option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label lable-upload" htmlFor="upload">
                <FcPlus /> Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="upload"
                multiple
                disabled
                // onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-12 image-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalViewUser;