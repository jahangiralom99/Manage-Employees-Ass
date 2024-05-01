import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import Button from "../../components/Shared/Button/Button";
import { IoMdMore } from "react-icons/io";
import { useState } from "react";

const Departments = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <section className="p-5">
      <div>
        <Button
          name="Department"
          title="Dashboard / Designations"
          buttonName="Add Designation"
        />
      </div>
      <div>
        <div className="mt-6">
          <p>
            Show
            <select className="border rounded-md ml-2 py-1 px-2">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="All">All</option>
            </select>
            <span className="ml-2">entries</span>
          </p>
        </div>
        <div className="inline-block min-w-full py-2 mt-8 align-middle ">
          <table className="min-w-full divide-y divide-gray-300 ">
            <thead className="bg-white">
              <tr className="rounded-t-xl">
                <th
                  scope="col"
                  className="py-3.5 p-3 pl-4 font-bold text-left text-sm front-semibold text-black sm:pl-0 "
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left font-bold text-sm flex items-center gap-4"
                >
                  <div className="flex cursor-pointer items-center ">
                    {" "}
                    <FaArrowDownLong className="text-[12px] text-[#4B4B5A]" />
                    <FaArrowUpLong className="text-[12px] text-[#4B4B5A]" />
                  </div>
                  Department Name
                </th>
                <th scope="col" className="px-3 py-3.5 font-bold  text-sm">
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex cursor-pointer">
                      <FaArrowDownLong className="text-[12px] text-[#4B4B5A]" />
                      <FaArrowUpLong className="text-[12px] text-[#4B4B5A]" />
                    </div>
                    Action
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border  text-[#4B4B5A]">
                <td className="whitespace-nowrap p-3 text-sm font-bold sm:pl-0 ">
                  1
                </td>
                <td className="ml-12 px-3 py-3 text-sm font-bold ">
                  Application Development
                </td>
                <td className="w-3 px-3 py-3 text-sm">
                  <div className="text-end cursor-pointer">
                    <IoMdMore
                      onClick={() => setOpen(!open)}
                      className="text-end text-2xl font-bold"
                    />
                  </div>
                </td>
                <div className="relative">
                  {open && (
                    <div className="bg-white p-3 rounded-md border w-32 absolute right-20 top-12">
                      <div>
                        <p className="hover:bg-pink-50 p-1 rounded-md">Edit</p>
                        <p className="hover:bg-pink-50 p-1 rounded-md">
                          Deleted
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </tr>
              <tr className="border bg-white text-[#4B4B5A]">
                <td className="whitespace-nowrap p-3 text-sm font-bold sm:pl-0 ">
                  2
                </td>
                <td className="ml-12 px-3 py-3 text-sm font-bold ">
                  Accounts Management
                </td>
                <td className="w-3 px-3 py-3 text-sm">
                  <div className="text-end cursor-pointer">
                    <IoMdMore
                      onClick={() => setOpen2(!open2)}
                      className="text-end text-2xl font-bold"
                    />
                  </div>
                </td>
                <div className="relative">
                  {open2 && (
                    <div className="bg-white p-3 rounded-md border w-32 absolute right-20 top-12">
                      <div>
                        <p className="hover:bg-pink-50 p-1 rounded-md">Edit</p>
                        <p className="hover:bg-pink-50 p-1 rounded-md">
                          Deleted
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </tr>
              <tr className="border text-[#4B4B5A]">
                <td className="whitespace-nowrap p-3 text-sm font-bold sm:pl-0 ">
                  3
                </td>
                <td className="ml-12 px-3 py-3 text-sm font-bold ">
                  IT Management
                </td>
                <td className="w-3 px-3 py-3 text-sm">
                  <div className="text-end cursor-pointer">
                    <IoMdMore
                      onClick={() => setOpen3(!open3)}
                      className="text-end text-2xl font-bold"
                    />
                  </div>
                </td>
                <div className="relative">
                  {open3 && (
                    <div className="bg-white p-3 rounded-md border w-32 absolute right-20 top-12">
                      <div>
                        <p className="hover:bg-pink-50 p-1 rounded-md">Edit</p>
                        <p className="hover:bg-pink-50 p-1 rounded-md">
                          Deleted
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Departments;
