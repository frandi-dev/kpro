import RoomChard from "../component/RoomChard";

const Rooms = () => {
  return (
    <div className="row p-2">
      <RoomChard name={"R101"} status={"maintenance"} />
      <RoomChard name={"R102"} customer={"Mr.frandi"} />
      <RoomChard name={"R103"} status={"active"} />
      <RoomChard name={"R105"} status={"close"} />
      <RoomChard name={"R106"} status={"available"} />
    </div>
  );
};

export default Rooms;
