import React  from "react";
import { BsDownload} from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
const DynamicQuestion = ({
  questionType,
  question,
  options,
  questWidith,
  rows = [],
  columns = [],
  error,
  onInputChange,
  value
}) => {
  
 
  const renderQuestion = () => {
    switch (questionType) {
      case "mcq":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max bg-white  rounded-lg flex-col py-4 px-5 gap-3">
            <p className="font-medium text-lg mb-3">{question}</p>
            {options.map((option, index) => (
              <label
                htmlFor="purpleColor"
                key={index}
                className="flex items-center gap-5 text-md"
              >
                <input
                  type="radio"
                  id="purpleColor"
                  className="mr-2 form-radio text-purple-500"
                  name={question}
                  value={option}
                  onChange={(e) => onInputChange(e.target.value)}
                />
                {option}
              </label>
            ))}
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "checkbox":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max bg-white  rounded-lg flex-col py-4 px-5 gap-3">
            <p className="font-medium text-lg mb-2">{question}</p>
            {options.map((option, index) => (
              <label
                htmlFor="purpleColor"
                key={index}
                className="flex items-center gap-5"
              >
                <input
                  id="purpleColor"
                  type="checkbox"
                  className="mr-2 form-checkbox text-purple-500"
                  name={question}
                  value={option}
                  onChange={(e) => onInputChange(e.target.value)}
                />
                {option}
              </label>
            ))}
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "text":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] bg-white  rounded-lg flex-col h-max px-5">
            <p className="font-medium text-lg mt-4">{question}</p>

            <div className="py-7">
              <input
                type="text"
                className={
                  questWidith
                    ? `mr-2 w-full border-b-2 border-b-gray-300 outline-none focus:border-b-purple-300`
                    : `mr-2  border-b-2 border-b-gray-300 outline-none focus:border-b-purple-300`
                }
                name={question}
                value={value || ""} // Display the current value
              onChange={(e) => onInputChange(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "long":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] bg-white  rounded-lg flex-col h-max px-5">
            <p className="font-medium text-lg mt-4">{question}</p>

            <div className="py-7">
              <input
                type="text"
                className={
                 
                    `mr-2 w-full border-b-2 border-b-gray-300 outline-none focus:border-b-purple-300`
                
                }
                name={question}
                value={value || ""} // Display the current value
              onChange={(e) => onInputChange(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "dropdown":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max bg-white  rounded-lg flex-col py-4 px-5 ">
            <label className="font-medium text-lg mb-2">{question}</label>
            <select  value={value || ""} onChange={(e) => onInputChange(e.target.value)} className="form-select w-44 mt-4  p-5 outline-none border border-1 border-gray-400">
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "fileupload":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max bg-white  rounded-lg flex-col py-4 px-5 ">
            <label className="font-medium  text-lg mb-2">{question}</label>
            <div className="relative rounded-md overflow-hidden ml-5 mt-2">
              <input
                type="file"
                className="absolute inset-0 w-40 h-full cursor-pointer opacity-0"
                name={question}
                accept=".pdf,.doc,.docx"
                  onChange={(e) => onInputChange(e.target.files[0])}
              />
              <button className="w-36 px- py-3 bg-white cursor-pointer text-blue-500 font-semibold rounded-md border border-gray-500 hover:bg-slate-140  flex items-center justify-center focus:outline-none">
                <BsDownload className="mr-4" />
                Add File
              </button>
            </div>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "linear-scale":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max bg-white  rounded-lg flex-col py-4 px-5">
            <label className="font-medium text-lg mb-2">{question}</label>
            <h1 className="text-center mr-24  block md:hidden">Worst</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-end  space-y-5 md:space-x-3 lg:space-x-10  py-3">
              <h1 className="hidden md:block">Worst</h1>
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex flex-row md:flex-col gap-5 items-center text-xl justify-center"
                >
                  {option}
                  <input
                    type="radio"
                    className="mr-2 form-radio text-purple-500"
                    name={question}
                    value={option}
                    onChange={(e) => onInputChange(e.target.value)}
                  />
                </label>
              ))}
              <h1 className="hidden md:block ">Best</h1>
            </div>
            <h1 className="text-center mr-24  block md:hidden">Best</h1>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );
      case "multi-choice-grid":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max  md:h-[18rem] bg-white  rounded-lg flex-col py-4 px-5">
            <label className="font-medium mb-5 text-lg">{question}</label>
            <div className="grid  gap-2 grid-cols-4 md:gap-6">
              <div className="block"></div>
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="text-center">
                  {column}
                </div>
              ))}
              {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex} >
                  <div className=" text-center ">{row}</div>
                  {columns.map((column, colIndex) => (
                    <label
                      key={colIndex}
                      htmlFor="purpleColor"
                      className="flex items-center justify-center col-span-1 "
                    >
                      <input
                        type="radio"
                        id="purpleColor"
                        className="mr-2 form-checkbox text-purple-500"
                        name={`${question}_${row}`} // Unique name for each checkbox
                        value={`${row}_${column}`}
                         onChange={() => onInputChange(`${row}_${column}`)}
                      />
                    </label>
                  ))}
                </React.Fragment>
              ))}

            </div>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );

      case "multi-choice-tick":
        return (
          <div className="mb-2 flex w-full md:w-[50vw] h-max md:h-[18rem] bg-white  rounded-lg flex-col py-4 px-5">
            <label className="font-medium text-lg mb-5">{question}</label>
            <div className="grid  gap-2 grid-cols-4 md:gap-6">
              <div className="block"></div>
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="text-center">
                  {column}
                </div>
              ))}
              {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <div className=" text-center ">{row}</div>
                  {columns.map((column, colIndex) => (
                    <label
                      key={colIndex}
                      htmlFor="purpleColor"
                      className="flex items-center justify-center col-span-1 "
                    >
                      <input
                        type="checkbox"
                        id="purpleColor"
                        className="mr-2 form-checkbox text-purple-500"
                        name={`${question}_${row}`} // Unique name for each checkbox
                        value={`${row}_${column}`}
                        onChange={() => onInputChange(`${row}_${column}`)}
                      />
                    </label>
                  ))}
                </React.Fragment>
              ))}
            </div>
            {error && (
              <p className="text-red-500 mt-2 flex gap-2 mb-2 items-center"> <span><BiErrorAlt/></span>
                This question requires one response per row
              </p>
            )}
          </div>
        );

    
      default:
        return null;
    }
  };

  return renderQuestion();
};

export default DynamicQuestion;
