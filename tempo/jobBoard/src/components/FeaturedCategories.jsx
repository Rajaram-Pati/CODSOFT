import React from 'react'

function FeaturedCategories() {
  return (
   <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Find jobs in the most in-demand categories across industries</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg smooth-transition">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-laptop-code text-2xl text-primary"></i>
          </div>
          <h3 className="font-bold mb-1">Technology</h3>
          <p className="text-sm text-gray-500">1,234 Jobs</p>
        </div>

        <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg smooth-transition">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-pencil-ruler text-2xl text-secondary"></i>
          </div>
          <h3 className="font-bold mb-1">Design</h3>
          <p className="text-sm text-gray-500">876 Jobs</p>
        </div>

        <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg smooth-transition">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-chart-line text-2xl text-blue-500"></i>
          </div>
          <h3 className="font-bold mb-1">Marketing</h3>
          <p className="text-sm text-gray-500">543 Jobs</p>
        </div>

        <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg smooth-transition">
          <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-briefcase text-2xl text-purple-500"></i>
          </div>
          <h3 className="font-bold mb-1">Business</h3>
          <p className="text-sm text-gray-500">765 Jobs</p>
        </div>

        <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg smooth-transition">
          <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-heartbeat text-2xl text-rose-500"></i>
          </div>
          <h3 className="font-bold mb-1">Healthcare</h3>
          <p className="text-sm text-gray-500">432 Jobs</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories
