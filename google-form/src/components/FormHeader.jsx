

export const FormHeader = () => {
  return (
    <div className="flex w-full md:w-[50vw] h-max bg-white  rounded-lg flex-col" >
        <h1 className=" text-2xl md:text-5xl text-black font-medium p-5 border-t-8 rounded-lg  border-t-purple-500 w-full">Assignment Task</h1>
        
        <div className="flex flex-col gap-5 py-4 px-5  border bottom-1 border-gray-400 border-r-0 border-l-0">

        <div className="flex justify-start items-start ">
            <span className="text-gray-400 font-semibold">ayanashraf88@gmail.com</span>
            <button className="text-blue-500">Switch Account</button>
        </div>

          <p className="text-sm text-gray-600 px-2">The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
        </div>
         <h2 className="text-red-500 px-5 py-3">* Indicates required question</h2>
    </div>
  )
}
