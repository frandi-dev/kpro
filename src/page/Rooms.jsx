import RoomChard from "../component/RoomChard";
import { FaPlus } from "react-icons/fa6";

const Rooms = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const role = user.role;

  return (
    <div className="row p-2">
      {role === "admin" && (
        <div className="col-12 mb-4">
          <div className="btn btn-primary">
            <FaPlus style={{ marginBottom: "2px" }} /> New
          </div>
        </div>
      )}
      <RoomChard name={"R101"} status={"maintenance"} />
      <RoomChard name={"R102"} customer={"Mr.frandi"} />
      <RoomChard name={"R103"} status={"active"} />
      <RoomChard name={"R105"} status={"close"} />
      <RoomChard name={"R106"} status={"available"} />
    </div>
  );
};

export default Rooms;
