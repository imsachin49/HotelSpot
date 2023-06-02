import { useState } from "react";
import { BiBed } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useRouter } from "next/router";
// cross in circle
import { IoMdClose } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import {GoAlert} from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchData, resetSearch } from '@/redux/searchSlice';

export default function Search({ isSmall }) {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const dispatch = useDispatch();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [warn,setWarn] = useState(false)
  const handleSearch = () => {
    if(destination === "") {
      return setWarn(true)
    }
    dispatch(setSearchData(
      {
        city: destination,
        dates:[
          {
            startDate: format(date[0].startDate, "yyyy-MM-dd"),
            endDate: format(date[0].endDate, "yyyy-MM-dd")
          }
        ],
        options: {
          adult: options.adult,
          children: options.children,
          room: options.room,
        }
      }
    ))
    router.push({
      pathname: "/hotels",
      query: {
        destination,
        date: JSON.stringify({
          startDate: format(date[0].startDate, "yyyy-MM-dd"),
          endDate: format(date[0].endDate, "yyyy-MM-dd"),
        }),
        options: JSON.stringify({
          adult: options.adult,
          children: options.children,
          room: options.room,
        }),
      },
    });
  };

  const [openSearch, setOpenSearch] = useState(true);
  const handleClose = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className={`w-full flex items-center justify-center z-10 ${openSearch ? '-mb-3' : '-mb-1'}`}>
      <div className={`relative flex ${isSmall ? "flex-col vsm:w-[65%] sm:w-[80%] xs:w-[91%]" : "w-[90%]"} h-full shadow-sh2 bg-red-300 rounded-md items-center justify-center p-1 space-x-1`}>
        {/* set Destination */}
          {/* <IoMdClose className="absolute -top-5 -right-5 text-2xl text-black bg-rose-500 rounded-full p-1 cursor-pointer border border-white border-5 hover:bg-blue-500" size={30} color="white" onClick={handleClose}/> */}
        <div className={`relative border border-gray-400 flex ${isSmall ? "w-full justify-center" : "w-full flex-1"} items-center border bg-white pl-2 rounded-sm`}>
          <BiBed size={30} className="text-2xl text-black bg-white mr-[1px]" />
          <select
            onChange={(e) => setDestination(e.target.value)}
            className="pl-1 w-full rounded-sm text-gray-600 p-4 outline-none bg-none placeholder:text-black text-[1.1rem]"
          >
            <option value="">Where are you going?</option>
            <option value="delhi">Delhi</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>

        {/* custom message to show when user don't enter the destination */}
        {warn && <div className="absolute -bottom-8 left-5 bg-blue-600 px-3 rounded-lg rounded-tl-none py-1 flex items-center">
          <GoAlert className="text-white font-mono mr-1"/>
          <h1 className="text-white text-[1.14rem] font-candara">Please enter the destination</h1>
        </div>}

        {/* set Date */}
        <div className={`relative flex ${isSmall ? "w-full" : "flex-1"} items-center justify-center bg-white rounded-md cursor-pointer`}>
          <div
            onClick={() => setOpenDate(!openDate)}
            className={`flex items-center w-full border ${isSmall ? 'justify-start ml-2' : 'justify-center'}`}>
            <FaCalendarAlt className="text-2xl text-black mr-[1px]" />
            <div className="font-bold p-4 pl-1">
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </div>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-16 vsm:-left-5 sm:-left-4 xs:-left-2 shadow-blurs rounded-lg text-black z-20 bg-gray-700 font-mono"
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              color="#111"
              fontSize="1.2rem"
              fontFamily="sans-serif"
            />
          )}
        </div>

        {/* set Options */}
        <div className={`relative flex ${isSmall ? "w-full" : "flex-1"} items-center justify-center bg-white rounded-md cursor-pointer`}>
          <div onClick={() => setOpenOptions(!openOptions)} className={`flex items-center w-full border ${isSmall ? 'justify-start ml-2' : 'justify-center'}`}>
            <RxPerson className="text-2xl text-black mr-[1px]" />
            <div className="font-bold font-candara p-4 pl-1 text-lg">
              {`${options.adult} adults . ${options.children} children . ${options.room} room`}
            </div>
          </div>
          {openOptions && (
            <div className="z-20 absolute top-16 left-5 w-[250px] flex flex-col rounded-md bg-gray-100 font-mono shadow-blurs">
              <div className="flex items-center justify-between p-4">
                <div className="flex flex-col">
                  <div className="font-bold">Adults</div>
                  <div className="text-gray-500">Ages 13 or above</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className={`border rounded-md p-2 cursor-pointer ${
                      options.adult <= 1 ? "cursor-not-allowed" : ""
                    }`}
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}
                  > -</button>
                  <div className="border rounded-md p-2">{options.adult}</div>
                  <button
                    className="border rounded-md p-2 cursor-pointer"
                    onClick={() => handleOption("adult", "i")}
                  > +</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex flex-col">
                  <div className="font-bold">Children</div>
                  <div className="text-gray-500">Ages 2-12</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className={`border rounded-md p-2 font-mono font-bold cursor-pointer ${
                      options.children <= 0 ? "cursor-not-allowed" : ""
                    }`}
                    disabled={options.children <= 1}
                    onClick={() => handleOption("children", "d")}
                  >-</button>
                  <div className="border rounded-md p-2">{options.children}</div>
                  <button
                    className="border rounded-md p-2 cursor-pointer"
                    onClick={() => handleOption("children", "i")}
                  >+</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex flex-col">
                  <div className="font-bold">Room</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className={`border rounded-md p-2 cursor-pointer ${
                      options.room <= 1 ? "cursor-not-allowed" : ""
                    }`}
                    disabled={options.room <= 1}
                    onClick={() => handleOption("room", "d")}
                  >- </button>
                  <div className="border rounded-md p-2">{options.room}</div>
                  <button
                    className="border rounded-md p-2 cursor-pointer"
                    onClick={() => handleOption("room", "i")}
                  > + </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Search Button */}
        <div onClick={handleSearch} className={`flex items-center justify-center bg-red-500 text-white font-bold p-4 cursor-pointer ${isSmall ? 'p-1 m-1 w-full rounded-sm font-extrabold text-xl' :'p-0'} h-[52px]`}>
          Search
        </div>
      </div>
    </div>
  );
}
