const Experience=()=>{
    return (
        <section className="py-12">
  <div className="container mx-auto">
    <div className="lg:flex lg:items-center">
      <div className="lg:w-1/2">
        <div className="text-3xl font-semibold mb-4">
          <h2 className="text-2xl font-semibold pl-10">With our all experience <br /> we will serve you</h2>
        </div>

        <div className="flex gap-5 pt-10">
          <div className="flex items-center flex-col">
            <span className="w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-semibold rounded-full">100+</span>
            <h6 className="text-lg mt-2">Successful events</h6>
          </div>
          <div className="flex items-center flex-col">
            <span className="w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-semibold rounded-full">20+</span>
            <h6 className="text-lg mt-2">Regular clients</h6>
          </div>
          <div className="flex items-center flex-col">
            <span className="w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-semibold rounded-full">2+</span>
            <h6 className="text-lg mt-2">years experience</h6>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <div>
          <img src={"/assets/images/exp1.png"} alt=''  style={{ width: '50%', height: '50%', borderRadius: '20px'}}/>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default Experience





