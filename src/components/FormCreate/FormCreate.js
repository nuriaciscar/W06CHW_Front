const FormCreate = () => {
  return (
    <form className="form_create" autoComplete="off" onSubmit>
      <div className="form_group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" name="name"></input>

        <label htmlFor="img">Image</label>
        <input id="img" name="image"></input>

        <label htmlFor="speed">Speed</label>
        <input
          type="range"
          min="0"
          max="10"
          id="speed"
          placeholder="Speed"
          name="speed"
        ></input>

        <label htmlFor="stamina">Stamina</label>
        <input
          type="range"
          min="0"
          max="10"
          id="stamina"
          placeholder="Stamina"
          name="stamina"
        ></input>

        <label type="date" htmlFor="date">
          Creation Date
        </label>
        <input id="date" placeholder="Creation Date" name="date"></input>
        <button>Create Robot</button>
      </div>
    </form>
  );
};

export default FormCreate;
