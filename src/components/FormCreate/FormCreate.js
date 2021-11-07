const FormCreate = () => {
  return (
    <form className="form_create container-sm" autoComplete="off" onSubmit>
      <div className="form_group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          className="form-control"
          required
        ></input>

        <label htmlFor="img">Image</label>
        <input id="img" name="image" className="form-control" required></input>

        <label htmlFor="speed">Speed</label>
        <input
          type="range"
          min="0"
          max="10"
          id="speed"
          placeholder="Speed"
          name="speed"
          className="form-range"
        ></input>

        <label htmlFor="stamina">Stamina</label>
        <input
          type="range"
          min="0"
          max="10"
          id="stamina"
          placeholder="Stamina"
          name="stamina"
          required
          className="form-range"
        ></input>

        <label type="date" htmlFor="date">
          Creation Date
        </label>
        <input
          id="date"
          placeholder="Creation Date"
          name="date"
          className="form-control"
          required
        ></input>
        <button type="submit" className="btn btn-primary">
          Create Robot
        </button>
      </div>
    </form>
  );
};

export default FormCreate;
