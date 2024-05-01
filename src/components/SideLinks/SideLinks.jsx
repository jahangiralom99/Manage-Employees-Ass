import { NavLink } from "react-router-dom";

const SideLinks = () => {
  return (
    <div className="flex gap-3 flex-col">
      <NavLink
        to="/advanced-table"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#5369f8] p-3 border rounded-lg"
            : "p-3 border rounded-lg"
        }
      >
        Advanced Table
      </NavLink>
      <NavLink
        to="/basic-elements"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#5369f8] p-3 border rounded-lg"
            : "p-3 border rounded-lg"
        }
      >
        Basic Element
      </NavLink>
      <NavLink
        to="/validation"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#5369f8] p-3 border rounded-lg"
            : "p-3 border rounded-lg"
        }
      >
        Validation
      </NavLink>
      <hr />
      <NavLink
        to="/departments"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#5369f8] p-3 border rounded-lg"
            : "p-3 border rounded-lg"
        }
      >
        Departments
      </NavLink>
      <NavLink
        to="/designations"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#5369f8] p-3 border rounded-lg"
            : "p-3 border rounded-lg"
        }
      >
        Designations
      </NavLink>
      <NavLink
        to="/Time-sheet"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#5369f8] p-3 border rounded-lg"
            : "p-3 border rounded-lg"
        }
      >
        Time Sheet
      </NavLink>
    </div>
  );
};

export default SideLinks;
