const BasicElement2 = () => {
  return (
    <div>
      <div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label lg:w-28">Default file input</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label htmlFor="date" className="w-28 font-semibold">
            Date
          </label>
          <input
            className="border w-full p-1 px-3 rounded-md"
            type="date"
            name=""
            id=""
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label htmlFor="date" className="w-28 font-semibold">
            Month
          </label>
          <input
            className="border w-full p-1 px-3 rounded-md"
            type="Month"
            name=""
            id=""
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label htmlFor="date" className="w-28 font-semibold">
            Time
          </label>
          <input
            className="border w-full p-1 px-3 rounded-md"
            type="time"
            name=""
            id=""
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label htmlFor="date" className="w-28 font-semibold">
            Week
          </label>
          <input
            className="border w-full p-1 px-3 rounded-md"
            type="Week"
            name=""
            id=""
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label w-28 font-semibold">Number</label>
          <input
            type="number"
            className="form-control focus-ring focus-ring-light border"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label w-28 font-semibold">URL</label>
          <input
            type="url"
            className="form-control focus-ring focus-ring-light border"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label w-28 font-semibold">Search</label>
          <input
            type="text"
            className="form-control focus-ring focus-ring-light border"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label w-28 font-semibold">Tel</label>
          <input
            type="text"
            className="form-control focus-ring focus-ring-light border"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label w-28 font-semibold">Color picker</label>
          <input
            type="color"
            className="form-control w-full form-control-color"
            id="exampleColorInput"
            value="#5369F8"
            title="Choose your color"
          />
        </div>
        <div className="mb-4 lg:flex gap-2 items-center">
          <label className="form-label w-28 font-semibold">Range</label>
          <input type="range" className="form-range" id="customRange1" />
        </div>
      </div>
    </div>
  );
};

export default BasicElement2;
