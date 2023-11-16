import React, { useState,useEffect } from 'react'
import { client, UrlFor } from '../database/sanity'
import { useNavigate } from 'react-router-dom'

export const Staff = () => {

    const navigate=useNavigate()
    const [data,setdata]=useState()
    useEffect(()=>{
        const doc =`*[_type == "staff" ]{
           name,
             age,
             domain,
             email,
             _id,
             image{
                      asset->{
                        url
                      }
                    },
           city,
             phone,
         }`

         client.fetch(doc).then((res)=>{
           setdata(res)
         }).catch((err)=>{
            console.log(err)
         })

   },[])

  return (
    <div>
        <div className="flex items-center h-screen w-full justify-center">
{
    data && data.map((res)=>(

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3 mx-5 w-60">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src={UrlFor(res.image)} alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8 font-lora">{res.name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold font-poppins">
                <p>{res.domain}</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold font-inter">City</td>
                    <td className="px-2 py-2 font-poppins">{res.city}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">+97{res.phone}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{res.email}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <button className='text-slate-200 w-28 rounded-md h-8  text-sm font-poppins font-bold bg-purple-800'
                onClick={()=>navigate(`/profile/${res._id}`)}>View Profile</button>
            </div>

        </div>
    </div>
</div>
    ))
}

</div>
    </div>
  )
}
