import "./ManageQuiz.scss";
import Select from "react-select";
import { useState } from "react";
import { postCreateNewQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const handleChangFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error("Name/Description is required");
      return;
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
      <hr />
      <div className="add-new"></div>
      <fieldset className="border rounded-3 p-3">
        <legend className="float-none w-auto px-3">Personalia:</legend>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label for="floatingPassword">Description</label>
        </div>
        <div className="my-3">
          <Select
            defaultValue={type}
            onChange={setType}
            options={options}
            placeholder={"Quiz type"}
          />
        </div>
        <div className="more-actions form-group">
          <label className="mb-1">Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(event) => handleChangFile(event)}
          />
        </div>
        <div className="mt-3">
          <button
            onClick={() => handleSubmitQuiz()}
            className="btn btn-warning"
          >
            Save
          </button>
        </div>
      </fieldset>
      <div className="list-detail">Table</div>
    </div>
  );
};
export default ManageQuiz;
