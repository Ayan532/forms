import { FormHeader } from "../components/FormHeader"
import Question from "../components/Question"


const Form = () => {
  return (
    <div className= " flex flex-col gap-3 p-2 ">
      <FormHeader/>
       <Question/>
       <h1 className="text-xl font-semibold text-center w-full text-gray-500">Custom Forms</h1>
    </div>
  )
}

export default Form