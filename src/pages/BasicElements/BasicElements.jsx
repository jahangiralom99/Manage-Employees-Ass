import { Link } from "react-router-dom";
import BasicElement1 from "../../components/BasicElement1/BasicElement1";
import BasicElement2 from "../../components/BasicElement2/BasicElement2";

const BasicElements = () => {
  return (
    <section className="p-3">
      <div className="flex items-center justify-between ">
        <div className="text-[18px] text-[#4B4B5A]">Basic Element</div>
        <div className="text-[#4B4B5A]">
          <Link to="#">Shreyu </Link> / <Link to="#">Tables</Link> /{" "}
          <Link to="#">Advanced Tables</Link>
        </div>
      </div>
      <div className="p-3 bg-white mt-3 rounded-md border">
        <h1 className="font-bold">INPUT TYPES</h1>
        <p className="text-[#4B4B5A] mt-2">
          Most common form control, text-based input fields. Includes support
          for all HTML5 types:{" "}
          <span className="text-red-500">
            text, password, datetime, datetime-local, date, month, time, week,
            number, email, url, search, tel, and color.
          </span>
        </p>
        {/* Input files */}
        <div className="lg:flex mt-5 gap-4">
          <div className="flex-1">
            <BasicElement1 />
          </div>
          <div className="flex-1">
            <BasicElement2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicElements;
