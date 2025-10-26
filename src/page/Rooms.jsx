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
  const [loading, setLoading] = useState(false);

  // fetch rooms
  useEffect(() => {
    const fetchRoom = async () => {
      const res = await api.get(`${api_url}/rooms`);
      const result = await res.json();
      if (result.error) {
        message.error(result.message);
      } else {
        setRooms(result.data);
      }
    };
    fetchRoom();
  }, [loading, setLoading]);

  // handle add room
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post(`${api_url}/rooms`, {
        name: name,
        price_per_hour: price,
      });
      const result = await res.json();
      if (res.status === 201) {
        message.success(result.message);
        setLoading(false);
      } else {
        message.error(result.message);
      }
    } catch (error) {
      message.error(error.message);
    }
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
              data-bs-target="#exampleModal"
            >
              <FaPlus style={{ marginBottom: "2px" }} /> New
            </button>
          </div>
        )}

        {rooms === undefined
          ? "Not Found!"
          : rooms.map((room) => (
              <RoomChard
                key={room.id}
                name={room.name}
                status={room.status}
                setLoading={setLoading}
              />
            ))}
      </div>
    </>
  );
};

export default Rooms;
