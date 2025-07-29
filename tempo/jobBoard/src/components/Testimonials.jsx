import React from 'react'

function Testimonials() {
  return (
    <div>
       <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Hear from people who found their dream jobs through ElevateJobs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <img src="tadu.jpg" alt="Rajesh Tadu - professional portrait of a man with curly hair smiling" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h4 className="font-bold">Rajesh Tadu</h4>
              <p className="text-gray-500">Product Designer at Google</p>
            </div>
          </div>
          <p className="text-gray-700 italic mb-6">"ElevateJobs made my job search effortless. Within two weeks of creating my profile, I had interviews with three top tech companies, and I landed my dream job."</p>
          <div className="flex text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <img src="dipak.jpg" alt="Dipak Dutta - professional portrait of an Asian man in a crisp white shirt" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h4 className="font-bold">Dipak Dutta</h4>
              <p className="text-gray-500">Senior Engineer at Microsoft</p>
            </div>
          </div>
          <p className="text-gray-700 italic mb-6">"The quality of the job listings on ElevateJobs is unmatched. The companies are vetted and the salary ranges are transparent, saving me hours of research and interviews for roles that weren't a good fit."</p>
          <div className="flex text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
