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
  const [editAction, setEditAction] = useState(false);
  const [editData, setEditData] = useState({});

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

  useEffect(() => {
    setName(editData.name);
    setPrice(editData.price);
  }, [editData, setEditData]);

  // handle add room
  const handleSubmitCreate = async (e) => {
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

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    // setLoading(true);
    console.log(name);
    console.log(price);
  };

  const handleSubmit =
    editAction === true ? handleSubmitEdit : handleSubmitCreate;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal
          title={editAction ? "Edit room" : "Create room"}
          action={setEditAction}
        >
          <RoomForm
            name={name ?? ""}
            price={price ?? 0}
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
              data-bs-target="#formModal"
              onClick={() => {
                setName("");
                setPrice(0);
                setEditAction(false);
                setEditData({});
              }}
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
                price={room.price_per_hour}
                setLoading={setLoading}
                action={setEditAction}
                setEditData={setEditData}
              />
            ))}
      </div>
    </>
  );
};

export default Rooms;
