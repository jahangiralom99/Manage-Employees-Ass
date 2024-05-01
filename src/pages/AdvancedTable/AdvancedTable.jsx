import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AdvancedTable = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between p-3">
        <div className="text-[18px] text-[#4B4B5A]">Advance Tables</div>
        <div className="text-[#4B4B5A]">
          <Link to="#">Shreyu </Link> / <Link to="#">Tables</Link> /{" "}
          <Link to="#">Advanced Tables</Link>
        </div>
      </div>
      {/* Table Start */}
      <div className="px-3 ">
        <div className=" bg-white p-4  border rounded-md">
          <section>
            <h1 className="text-[16px]  font-semibold">PAGINATION & SORT</h1>
            <p className="text-[#4B4B5A] mt-2 mb-3">
              A simple example of table with pagination and column sorting
            </p>
            <div>
              <h1 className="mt-6">
                <span className="font-bold">Search :</span>
                <input
                  className="border rounded-md ml-2 py-1 px-3"
                  type="text"
                  placeholder="60 records..."
                />
              </h1>
            </div>
          </section>
          <section className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="border-b-[3px]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 font-bold text-left text-sm front-semibold text-black sm:pl-0"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-bold text-sm flex items-center gap-4"
                      >
                        <div className="flex cursor-pointer items-center">
                          {" "}
                          <FaArrowDownLong className="text-[12px] text-[#4B4B5A]" />
                          <FaArrowUpLong className="text-[12px] text-[#4B4B5A]" />
                        </div>
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 font-bold text-left text-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex cursor-pointer">
                            <FaArrowDownLong className="text-[12px] text-[#4B4B5A]" />
                            <FaArrowUpLong className="text-[12px] text-[#4B4B5A]" />
                          </div>
                          Phone Number
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 font-bold text-left text-sm  "
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 font-bold text-left text-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex cursor-pointer">
                            <FaArrowDownLong className="text-[12px] text-[#4B4B5A]" />
                            <FaArrowUpLong className="text-[12px] text-[#4B4B5A]" />
                          </div>
                          Company
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border-b text-[#4B4B5A]">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold sm:pl-0">
                        1
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm ">
                        Burt
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        +1 (823) 532-2427
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        32
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Kaggle
                      </td>
                    </tr>
                    <tr className="border-b text-[#4B4B5A]">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold sm:pl-0">
                        2
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm ">
                        Bruno
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        +1 (813) 583-2089
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        33
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Magmina
                      </td>
                    </tr>
                    <tr className="border-b text-[#4B4B5A]">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold sm:pl-0">
                        3
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm ">
                        Alvarado
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        +1 (975) 468-3875
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        36
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Translink
                      </td>
                    </tr>
                    <tr className="border-b text-[#4B4B5A]">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold sm:pl-0">
                        4
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm ">
                        Lilia
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        +1 (891) 537-3461
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        24
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Digitalus
                      </td>
                    </tr>
                    <tr className="border-b text-[#4B4B5A]">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold sm:pl-0">
                        5
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm ">
                        Amanda
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        +1 (916) 522-3747
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        25
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Bunga
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* Display */}
          <section className="mt-7">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-wrap gap-2 items-center">
                <h1 className="font-bold"> Display : </h1>
                <div>
                  <select className="border rounded-md  py-2 px-2">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="All">All</option>
                  </select>
                  Page <strong className="ml-2">1 of 12</strong>{" "}
                </div>
                <div className="flex items-center">
                  <strong>Go to Page</strong>
                  <input
                    className="border ml-2 py-2 px-2 w-20 rounded-md"
                    type="number"
                    name=""
                    id=""
                    defaultValue={1}
                  />
                </div>
              </div>

              <div>
                {/* Pagination button */}
                <div className="">
                  <nav
                    className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
                    aria-label="Pagination"
                  >
                    {/* <!-- Previous Page Button --> */}
                    <a
                      className="flex w-10 h-10 mr-1 hover:bg-pink-50 justify-center items-center rounded-full  text-black"
                      href="#"
                      title="Previous Page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="block w-5 h-5"
                      >
                        <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </a>
                    {/* <!-- Page Buttons (1 to 5) --> */}
                    <a
                      className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border bg-[#5369f8] text-white"
                      href="#"
                      title="Page 1"
                    >
                      1
                    </a>
                    <a
                      className="hidden md:flex hover:bg-pink-50 w-10 h-10 mx-1 justify-center items-center rounded-full border "
                      href="#"
                      title="Page 1"
                    >
                      2
                    </a>
                    <a
                      className="hidden md:flex w-10 hover:bg-pink-50 h-10 mx-1 justify-center items-center rounded-full border "
                      href="#"
                      title="Page 1"
                    >
                      3
                    </a>
                    <a
                      className="hidden md:flex hover:bg-pink-50 w-10 h-10 mx-1 justify-center items-center rounded-full border "
                      href="#"
                      title="Page 1"
                    >
                      4
                    </a>
                    <a
                      className="hidden md:flex hover:bg-pink-50 w-10 h-10 mx-1 justify-center items-center rounded-full border "
                      href="#"
                      title="Page 1"
                    >
                      5
                    </a>

                    {/* previous Button */}
                    <a
                      className="flex w-10 hover:bg-pink-50 h-10 ml-1 justify-center items-center rounded-full  "
                      href="#"
                      title="Next Page"
                    >
                      <span className="sr-only">Next Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="block w-5 h-5"
                      >
                        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTable;
