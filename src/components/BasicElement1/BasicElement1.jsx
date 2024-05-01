const BasicElement1 = () => {
  return (
    <div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Text</label>
        <input
          type="text"
          className="form-control focus-ring focus-ring-light border"
          id="exampleFormControlInput1"
          placeholder="Some test value..."
        />
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Email</label>
        <input
          type="email"
          className="form-control focus-ring focus-ring-light border"
          id=""
          placeholder="Email"
        />
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Password</label>
        <input
          type="password"
          className="form-control focus-ring focus-ring-light border"
          id="exampleFormControlInput1"
          placeholder="Password"
          defaultValue="0010212"
        />
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Placeholder</label>
        <input
          type="text"
          className="form-control focus-ring focus-ring-light border"
          id="exampleFormControlInput1"
          placeholder="Placeholder"
        />
      </div>
      <div className="mb-4 lg:flex items-center ">
        <label className="form-label font-semibold">Example textarea</label>
        <textarea
          className="form-control focus-ring focus-ring-light border"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Readonly</label>
        <input
          type="text"
          className="form-control focus-ring focus-ring-light border"
          id="exampleFormControlInput1"
          placeholder="Readonly"
        />
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Disabled</label>
        <input
          type="text"
          className="form-control focus-ring focus-ring-light border"
          id="exampleFormControlInput1"
          placeholder="Disabled"
        />
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="w-28 font-semibold">Static control</label>
        <div className="">
          <input
            type="text"
            className="form-control-plaintext focus-ring focus-ring-black focus-ring focus-ring-light"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label className="form-label w-28 font-semibold">Helping text</label>
        <div>
          <input
            type="password"
            id="inputPassword5"
            className="form-control focus-ring focus-ring-black focus-ring focus-ring-light"
            aria-describedby="passwordHelpBlock"
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
      </div>
      <div className="mb-4 lg:flex gap-2 items-center">
        <label htmlFor="Input Select" className="font-semibold">Input Select</label>
        <select className="form-select" aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default BasicElement1;
