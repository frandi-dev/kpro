import RoomChard from "../component/RoomChard";
import { FaPlus } from "react-icons/fa6";
import Modal from "../component/Modal";
import RoomForm from "../component/RoomForm";
import { useState } from "react";

const Rooms = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(price);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal title={"Add a new room"}>
          <RoomForm
            name={name}
            price={price}
            setName={setName}
            setPrice={setPrice}
          />
        </Modal>
      </form>
      <div className="row p-2">
        {role === "admin" && (
          <div className="col-12 mb-4">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <FaPlus style={{ marginBottom: "2px" }} /> New
            </button>
          </div>
        )}
        <RoomChard name={"R101"} status={"maintenance"} />
        <RoomChard name={"R102"} customer={"Mr.frandi"} />
        <RoomChard name={"R103"} status={"active"} />
        <RoomChard name={"R105"} status={"close"} />
        <RoomChard name={"R106"} status={"available"} />
      </div>
    </>
  );
};

export default Rooms;
