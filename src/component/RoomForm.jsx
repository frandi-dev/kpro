const RoomForm = ({ name, price, setName, setPrice }) => {
  return (
    <>
      <div className="mb-3">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <div>
          <label htmlFor="price_per_hour" className="form-label">
            Price
          </label>
          <input
            type="number"
            name="price_per_hour"
            min={0}
            className="form-control"
            id="price_per_hour"
            value={price}
            onChange={setPrice}
          />
        </div>
      </div>
    </>
  );
};

export default RoomForm;
