
function Herosection(){
    return(
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Find Your Dream <span className="bg-white text-transparent bg-clip-text">Job</span> Today</h1>
          <p className="text-xl text-white/90 mb-8">Join thousands of companies and candidates finding perfect matches on our premium platform.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input type="text" placeholder="Job title or keyword" className="w-full px-5 py-4 pr-12 rounded-lg focus:outline-none bg-gray-700 focus:ring-2 focus:ring-white/70 text-dark"/>
              <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button className="px-6 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 smooth-transition whitespace-nowrap">
              Find Jobs
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Remote</span>
            <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Full-time</span>
            <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Developer</span>
            <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Design</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <img src="findyourjob.jpg" alt="Happy diverse team collaborating in a modern office space with laptops and whiteboards" className="rounded-xl shadow-2xl floating"/>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-40">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <i className="fas fa-briefcase text-black"></i>
              </div>
              <div>
                <p className="text-xs text-black">Available Jobs</p>
                <p className="font-bold text-black">12,345+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )

}

export default Herosection
