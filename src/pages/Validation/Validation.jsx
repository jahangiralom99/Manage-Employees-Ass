import { Link } from "react-router-dom";
import BootstrapValNormal from "../../components/BootstrapValNormal/BootstrapValNormal";
import BootstrapValToolTip from "../../components/BootstrapValToolTip/BootstrapValToolTip";

const Validation = () => {
  return (
    <section>
      <div className="flex items-center justify-between p-3">
        <div className="text-[18px] text-[#4B4B5A]">Validation</div>
        <div className="text-[#4B4B5A]">
          <Link to="#">Shreyu </Link> / <Link to="#">Tables</Link> /{" "}
          <Link to="#">Advanced Tables</Link>
        </div>
      </div>
      {/* 2 forms */}
      <div className="lg:flex p-3 gap-5">
        
        <div className="flex-1 bg-white p-3 rounded-md border">
          <BootstrapValNormal />
        </div>
        <div className="flex-1 bg-white p-3 rounded-md border">
          <BootstrapValToolTip />
        </div>
      </div>
    </section>
  );
};

export default Validation;
