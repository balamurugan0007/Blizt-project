import burger from "../assets/buger.png"
export const Banner =()=>{
    return(
        <div className="px-20">
         
           <h2 className="font-bold font-inter text-7xl text-slate-50 mt-5 p-6 ">
                Welcome Back!
            </h2>

            <p className="font-poppins text-md p-6 text-slate-100 mt-2 w-1/2"> Indulge your taste buds at Foodie Delights, where every flavor tells a delicious story. Welcome to a culinary journey like no other!</p>


            <div className="mr-auto">
                 <div className="absolute bg-black w-80 h-80 rounded-lg mt-52">
                     
                 </div>

                 <img className="relative object-cover  w-96 h-96 top-4 left-12" src={burger} alt='pic'/>

             </div>
        
        </div>
    )
}