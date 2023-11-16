import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const Navbar = () => {

    
  return (
    

<div className='lg:px-20 lg:py-6 bg-blue-900'>
     <div className='flex justify-between'>
          <h2 className='text-2xl text-slate-100 font-lora font-bold'>Staff Portel</h2>
          <div className='lg:flex hidden '>
            <AnchorLink href='#Home'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>Home</h4>
            </AnchorLink>
            <AnchorLink href='#Staffs'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>Staffs</h4>
            </AnchorLink>
            <AnchorLink href='#workshops'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>workshops</h4>
            </AnchorLink>
            <AnchorLink href='#Contact'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>contact</h4>
            </AnchorLink>
          

          </div>
        
     </div>

     <div className='flex lg:hidden py-4'>
          <AnchorLink href='#Home'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>Home</h4>
            </AnchorLink>
            <AnchorLink href='#Staffs'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>Staffs</h4>
            </AnchorLink>
            <AnchorLink href='#workshops'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>Workshops</h4>
            </AnchorLink>
            <AnchorLink href='#Contact'>
              <h4 className='text-md font-poppins ml-4 font-md text-slate-200 hover:text-slate-50'>Contact</h4>
            </AnchorLink>
          </div>
</div>


  )
}
