import RoomChard from "../component/RoomChard";
import { useEffect, useState } from "react";
import useConfig from "../lib/config";
import api from "../lib/api";
import { useAlert } from "../context/AlertContext";
import Spiner from "../component/Spiner";

const Rooms = () => {
  const [rooms, setRooms] = useState();
  const { api_url } = useConfig();
  const message = useAlert();
  const [loading, setLoading] = useState(false);

  // fetch rooms
  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      const res = await api.get(`${api_url}/rooms`);
      const result = await res.json();
      if (result.error) {
        message.error(result.message);
      } else {
        setRooms(result.data);
        setLoading(false);
      }
    };
    fetchRoom();
  }, [loading, setLoading]);

  return (
    <>
      <div className="row p-2">
        {rooms === undefined
          ? "Not Found!"
          : rooms.map((room) => (
              <RoomChard
                key={room.id}
                name={room.name}
                status={room.status}
                price={room.price_per_hour}
                setLoading={setLoading}
              />
            ))}
      </div>
    </>
  );
};

export default Rooms;
