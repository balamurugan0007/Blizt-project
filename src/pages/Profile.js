import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, UrlFor } from '../database/sanity'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {

    let id=useParams()
    console.log(id)

    const [data,setdata]=useState()

    useEffect(()=>{
        const doc=`*[_type == "staff" && _id==('${id.id}')]{
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
            experience,
        }
        `
        client.fetch(doc).then((res)=>{
            console.log(res)
            setdata(res)

        }).catch((err)=>{
            console.log(err)
        })
    },[id])

    const navigate=useNavigate();


const [report,setreport]=useState()
    useEffect(()=>{

        const doc=`*[_type == "report" &&  references('${id.id}') ]{
            name,
              des
          }`
          client.fetch(doc).then((res)=>{
            console.log(res)
            setreport(res)
          }
          ).catch((err)=>{
            console.log(err)
          })

    },[id])


  return (
    <div className='w-full h-full px-20 py-20'>
         {
            data && data.map((res)=>(
                <div class="relative hidden  lg:flex  w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src={UrlFor(res.image)}
        alt="image"
        class="h-80 w-80 object-cover rounded-full "
      />
    </div>
    <div class="p-6">
      <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
        {res.name}
      </h6>
      <h4 class="mb-2 block font-lora font-bold text-2xl  leading-snug tracking-normal text-blue-gray-900 antialiased">
       {res.domain}
      </h4>
    
  
    {/* =======Details ====*/}
    <div className='detail mt-5 mb-5' id='detail'>
  
        
          <h2 className='font-lora font-bold text-xl text-purple-700'>Reports & Acheievements</h2>
          {report && report.map((datas)=>(
             <div className='px-3'>

             <h2 className='font-lora text-xl text-blue-500 font-bold  mt-2'>
                {datas.name}
              
             </h2>
             <p className='text-sm text-slate-500 font-poppins mt-2'>
                {datas.des}
             </p>
          </div>
          ))}
       <button className='text-slate-200 w-28 rounded-md h-8  text-sm font-poppins mt-4 bg-red-800'
          onClick={()=>{navigate('/profile/update')}} >Update Profile </button>
     </div>


            </div>
    
     
    </div>

            ))
         }
    </div>
  
  )
}
