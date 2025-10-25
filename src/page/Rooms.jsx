import RoomChard from "../component/RoomChard";
import { FaPlus } from "react-icons/fa6";
import Modal from "../component/Modal";
import RoomForm from "../component/RoomForm";
import { useEffect, useState } from "react";
import useConfig from "../lib/config";
import api from "../lib/api";
import { useAlert } from "../context/AlertContext";

const Rooms = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [rooms, setRooms] = useState();
  const { api_url } = useConfig();
  const message = useAlert();

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await api.get(`${api_url}/rooms`);
      const result = await res.json();
      if (result.error) {
        message.error(result.message);
      } else {
        message.success(result.message);
        setRooms(result.data);
      }
    };

    fetchRoom();
  }, []);

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

        {rooms === undefined
          ? "Not Found!"
          : rooms.map((room) => (
              <RoomChard key={room.id} name={room.name} status={room.status} />
            ))}
      </div>
    </>
  );
};

export default Rooms;
