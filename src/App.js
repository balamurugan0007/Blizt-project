
import { Banner } from "./componets/Banner";
import { Form } from "./componets/Forms";


function App() {
  return (
    <div className=" flex justify-center items-center">

     

          <section className="w-4/5 h-full">
            <Banner/>

        </section>
        <section className="w-1/5 h-full">
          <Form/>

        </section>
          


    </div>
              
  );
}

export default App;
