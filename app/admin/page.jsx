import Link from "next/link"

const Page = () => {
  return (
    <main className="md:w-[80vw]  h-full  md:p-12 p-3 py-8 ">
      <section className="flex w-full justify-between flex-wrap">

      <div className="flex flex-col md:text-left w-full md:w-fit h-[80%]  justify-center">
        <span className="text-[4rem] ">Wellcome</span>
        <p className="text-3xl ">to Admin Panel</p>
      </div>

       <div className="w-full md:w-[45%] ">
        <img src={"/mangement.webp"} alt="" />
       </div>
      </section>

      <section className="my-16 md:max-w-[80vw] overflow-hidden   flex flex-wrap gap-4 md:justify-between justify-center" >
        <p className="w-full text-left">
          Let's get Started with
        </p>
        
        <Link to={"/admin"} className="md:max-w-[45%]  bg-blue-100 rounded my-6 p-6 hover:scale-[1.02] transition-all flex flex-col items-center justify-center md:h-fit w-full">
          <h2 className="text-left text-3xl text-blue-gray-800 font-bold">
            Managing Products  
          </h2>

          <img className="w-full" src={"/products.webp"} alt="" />
        </Link>

        <Link to={"/admin/inbox"} className="md:max-w-[45%]  bg-blue-100 rounded my-6 p-6 hover:scale-[1.02] transition-all flex flex-col items-center justify-center md:h-fit w-full">
          <h2 className="text-left text-3xl text-blue-gray-800 font-bold">
            Answering Queries  
          </h2>

          <img className="w-full" src={"/inbox.webp"} alt="" />
        </Link>
        <Link to={"/admin/orders"} className="md:max-w-[45%]  bg-blue-100 rounded my-6 p-6 hover:scale-[1.02] transition-all flex flex-col items-center justify-center md:h-fit w-full ">
          <h2 className="text-left text-3xl text-blue-gray-800 font-bold">
            Receiving Orders  
          </h2>

          <img className="w-full" src={"/order.webp"} alt="" />
        </Link>

        <Link to={"/admin/management"} className="md:max-w-[45%]  bg-blue-100 rounded my-6 p-6 hover:scale-[1.02] transition-all flex flex-col items-center justify-center md:h-fit w-full">
          <h2 className="text-left text-3xl text-blue-gray-800 font-bold">
            Managing Store  
          </h2>

          <img className="w-full" src={"/Businessman managing.webp"} alt="" />
        </Link>

      </section>
    </main>
  );
};

export default Page;