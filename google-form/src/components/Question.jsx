import { useState } from "react";
import DynamicQuestion from "./DynamicQuestion";

const Question = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (question, value) => {

    setFormData((prevData) => ({
      ...prevData,
      [question]: value,
    }));
 
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [question]: false,
    }));
  };
  const handleReset=()=>{
    setFormData({})
    setFormErrors({})
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    const errors = {};
   
    !formData["MCQ Question"] &&( errors["MCQ Question"] = true)
    !formData["File Upload Question"] &&( errors["File Upload Question"] = true)
    !formData["Checkbox Question"] &&(errors["Checkbox Question"] = true)
    !formData["Short Answer Question"] &&( errors["Short Answer Question"] = true)
    !formData["Long Answer Question"] &&(   errors["Long Answer Question"] = true)
    !formData["Dropdown Question"] &&(   errors["Dropdown Question"] = true)
    !formData["Multi-Choice-Grid"] &&(  errors["Multi-Choice-Grid"] = true)
    !formData["Multi-Choice-Tick"]  &&(   errors["Multi-Choice-Tick"] = true)
    !formData["Linear Scale"] &&(   errors["Linear Scale"] = true)

    
    setFormErrors(errors);

    // If there are no errors, store data in localStorage
    if (Object.keys(errors).length === 0) {
      console.log(formData);
       localStorage.setItem("formData", JSON.stringify(formData));
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <DynamicQuestion
        questionType="mcq"
        question="MCQ"
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        error={formErrors["MCQ Question"] }
     
        onInputChange={(value) => handleInputChange("MCQ Question", value)}
      />

      <DynamicQuestion
        questionType="checkbox"
        question="Checkbox"
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        error={formErrors["Checkbox Question"]}
       
        onInputChange={(value) => handleInputChange("Checkbox Question", value)}
      />
      <DynamicQuestion
        questionType="text"
        question="Short Answer"
        value={formData["Short Answer Question"] || ""} // Pass value from formData
        error={formErrors["Short Answer Question"]}
        onInputChange={(value) =>
          handleInputChange("Short Answer Question", value)
        }
      />
      <DynamicQuestion
        questionType="long"
        questWidith="full"
        question="Long Question"
        value={formData["Long Answer Question"] || ""} // Pass value from formData
        error={formErrors["Long Answer Question"]}
        onInputChange={(value) =>
          handleInputChange("Long Answer Question", value)
        }
      />

      <DynamicQuestion
        questionType="dropdown"
        question="Drop down"
        options={["Choose", "Option 1", "Option 2", "Option 3"]}
        value={formData["Dropdown Question"] || ""}
        error={formErrors["Dropdown Question"]}
        onInputChange={(value) => handleInputChange("Dropdown Question", value)}
      />
      <DynamicQuestion     error={formErrors["File Upload Question"]} questionType="fileupload" question="Upload" value={formData["File Upload Question"]}
        onInputChange={(value) => handleInputChange("File Upload Question", value)}/>
      <DynamicQuestion
        questionType="linear-scale"
        question="Liner Scale"
        options={["1", "2", "3", "4", "5"]}
        error={formErrors["Linear Scale"]}
        onInputChange={(value) => handleInputChange("Linear Scale", value)}
      />
      <DynamicQuestion
        questionType="multi-choice-grid"
        question="Multi choice Grid"
        rows={["Row 1", "Row 2", "Row 3"]}
        columns={["Column 1", "Column 2", "Column 3"]}
        error={formErrors["Multi-Choice-Grid"]}
        onInputChange={(value) => handleInputChange("Multi-Choice-Grid", value)}
      />
      <DynamicQuestion
        questionType="multi-choice-tick"
        question="Tick Box Grid"
        rows={["Row 1", "Row 2", "Row 3"]}
        columns={["Column 1", "Column 2", "Column 3"]}
        error={formErrors["Multi-Choice-Tick"]}
        onInputChange={(value) => handleInputChange("Multi-Choice-Tick", value)}
      />

      <div className=" flex  w-full md:hidden justify-center items-center gap-2">
        <div className="border-4 border-green-500 rounded-full bg-green-500 w-[70%]"></div>
        <p>Page 1 of 1</p>
      </div>
      <div className="w-full flex flex-row justify-between">
        <button className=" md:py-1 lg:py-2 px-5 rounded-lg bg-purple-600 text-white">
          Submit
        </button>
        <div className=" hidden md:flex w-full  justify-center items-center gap-2">
          <div className="border-4 border-green-500 rounded-full bg-green-500 md:w-[40%] lg:w-[70%]"></div>
          <p>Page 1 of 1</p>
        </div>

        <button
          type="submit"
          className="py-2 px-5 rounded-lg w-52 text-purple-600"
          onClick={handleReset}
        >
          Clear form
        </button>
      </div>
    </form>
  );
};

export default Question;
