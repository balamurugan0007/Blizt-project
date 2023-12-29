import React from 'react'

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { useFormik } from 'formik';
import * as yup from "yup"

export const Form =()=>{

    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            name:yup.string().strict().required("Username is required").trim("avoid spaces"),
            email:yup.string().required("email requied").email(),
            password:yup.string().trim().required("password reaquired"),

        }),
        onSubmit:(data)=>{
            console.log(data)
        }
    })
    return (
        <div className="w-full h-full p-10 bg-white  ">
             <h2 className="font-lora font-bold text-3xl text-slate-800 mt-16
             ">Foodie Delight</h2>

             <h3 className="font-poppins font-medium text-xl text-red-600 mt-16">
                Create Account
             </h3>

             <form className="p-2" onSubmit={formik.handleSubmit}>
                 <div className="mt-6 ">
                     <input placeholder="UserName" className="w-full h-12 font-poppins shadow-md rounded-md  outline-none mt-6" name='name' onChange={formik.handleChange} value={formik.values.name}/>

                     {formik.errors.name ?
                     
                     <p className='font-poppins text-sm text-red-800'>*{formik.errors.name}</p>:null}

                     <input placeholder="Email" className="w-full h-12 font-poppins shadow-md rounded-md  outline-none mt-6" onChange={formik.handleChange} name="email" value={formik.values.email}/>
                     {formik.errors.email ?
                     
                     <p className='font-poppins text-sm text-red-800'>*{formik.errors.email}</p>:null}

                     <input placeholder="Password" className="w-full h-12 font-poppins shadow-md rounded-md  outline-none mt-6" onChange={formik.handleChange} name='password' value={formik.values.password}/>
                     {formik.errors.password ?
                     
                     <p className='font-poppins text-sm text-red-800'>*{formik.errors.password}</p>:null}

                     <button type='submit' placeholder="Password" className="w-full h-12 font-poppins mt-10
                      shadow-md rounded-md  outline-none   text-slate-50 bg-red-600">Create Account</button>

                     <p className='font-poppins text-sm text-slate-800 mt-10'>
                        Already have an account Login!
                     </p>
                 </div>
             </form>

             <section className="flex items-center mt-10 justify-between p-10">
                <div className="">
                    <FaGoogle className='text-orange-600 w-8 h-8'/>

                </div>
                <div className="">
                    <FaFacebook className='text-blue-800 w-8 h-8'/>

                </div>
             </section>
        </div>
    )
}



