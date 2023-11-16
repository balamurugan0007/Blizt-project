import React from 'react'
import{useFormik } from "formik"
import * as yup from "yup"
import {IoMdArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
export const Update = () => {

    const navigate=useNavigate()


   const formik=useFormik({
    initialValues:{
        Name:'',
        Email:'',
        Phone:'',
        College:'',
        Department:'',
        Whatsapp:'',
        City:'',
   
        Degree:'',
       


       
    },
    validationSchema:yup.object({
       
        Name:yup.string()
        .strict()
        .required("Must enter your Name"),
        
        
        Email:yup.string()
        .required("Email must required")
        .email(),


        Phone:yup.string()
        .strict()
        .required("Phone Number must require").min(10).max(10),
        
        Department:yup.string()
        .strict()
        .required("Department must require"),

        College:yup.string()
        .strict()
        .required("Department must require"),

        
        
        City:yup.string()
        .strict()
        .required("City must require"),

        Degree:yup.string()
        .strict()
        .required("Department must require"),

      
    
        
        
        
    }),     onSubmit:async(userInputData)=>{

            //const submitdata={...userInputData ,Payment:doc.url }
            console.log(userInputData)

            formsubmit(userInputData)
      
  }

})

const formsubmit=()=>{

}


  return (
    <div>
         <div className='px-3'>
        <div className='flex justify-center items-center mr-3 lg:mr-0'>
           <IoMdArrowBack className=' w-16 h-10 text-slate-300 mr-3 mt-4 lg:mt-0' onClick={()=>navigate('/')}/>
            <h2 className='font-lora font-bold text-xl lg:text-5xl text-slate-100 mt-5 text-center'>Profile Update</h2>
        </div>
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    
    <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Name' onChange={formik.handleChange} value={formik.values.Name}/>
                {formik.errors.Name ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Name}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" name='Email' className=" font-poppins block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={formik.handleChange} value={formik.values.Email}/>
                {formik.errors.Email ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Email}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">College Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='College' onChange={formik.handleChange} value={formik.values.College}/>
                {formik.errors.College ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.College}</div>
                            :null}
            </div>


            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Degree</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Degree' onChange={formik.handleChange} value={formik.values.Degree}/>
                {formik.errors.Degree ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Degree}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Domain</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Department'onChange={formik.handleChange} value={formik.values.Department} />
                {formik.errors.Department ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Department}</div>
                            :null}
            </div>

           

            

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Whatsapp</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Whatsapp' onChange={formik.handleChange} value={formik.values.Whatsapp}/>
                
            </div>
           
            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">City</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='City' onChange={formik.handleChange} value={formik.values.City}/>
                {formik.errors.City ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.City}</div>
                            :null}
            </div>

          
            
           
           
        </div>

       
         
    

        
        


        <div className="flex justify-end mt-6">
            <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 font-poppins">Save</button>
        </div>
    </form>
</section>

 

 
   </div>
    </div>
  )
}
