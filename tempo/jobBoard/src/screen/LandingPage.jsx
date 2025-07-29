import React from 'react'
import { useState } from 'react'

import viteLogo from '/vite.svg'

import Herosection from '../components/Herosection'
import Featured from '../components/Featured'
import JobCard from '../components/JobCard'
import FeaturedCategories from '../components/FeaturedCategories'
import Testimonials from '../components/Testimonials'
import { useSelector } from 'react-redux'

function LandingPage() {
  const user = useSelector((state) => state.auth.user)
  return (
    
       <body className="font-sans bg-gray-50 text-gray-800">
  {/* <!-- Modern Navigation --> */}
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="jobConnect.png" alt="JobConect logo - A minimalist mountain icon with gradient blue to green colors" className="h-10 w-10"/>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text ">JobConect</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-primary smooth-transition">Jobs</a>
          <a href="#" className="font-medium hover:text-primary smooth-transition">Companies</a>
          <a href="#" className="font-medium hover:text-primary smooth-transition">Career Tips</a>
          <a href="#" className="font-medium hover:text-primary smooth-transition">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          {!user && !user.length>0 && <button className="px-4 py-2 font-medium rounded-lg hover:bg-gray-100 smooth-transition">Sign In</button>}
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-400 smooth-transition">Post a Job</button>
        </div>
      </div>
    </div>
  </nav>

  {/* <!-- Hero Section --> */}
    <section className="gradient-bg text-white">
  <Herosection />
</section>
  {/* <!-- Featured Companies --> */}
  <section className="bg-white py-12">
   <Featured />
  </section>

  {/* <!-- Job Listings --> */}
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Latest Job Openings</h2>
        <div className="flex items-center space-x-3">
          <span className="text-gray-500">Filter by:</span>
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Business</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <JobCard /> 
      </div>
      <div className="text-center mt-5">
        <button className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 smooth-transition">
          Browse All Jobs
        </button>
      </div>
    </div>
  </section>

  {/* <!-- FeaturedCategories --> */}
  <section className="py-12 bg-gray-50">
    <FeaturedCategories />
  </section>

  {/* <!-- Testimonials --> */}
  <section className="py-12 bg-white">
   <Testimonials />
  </section>

  {/* <!-- CTA Section --> */}
  <section className="py-16 gradient-bg text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Opportunity?</h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of professionals who advanced their careers with ElevateJobs</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-blue-600 text-primary font-semibold rounded-lg hover:bg-blue-500 smooth-transition">
          Sign Up Now
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 smooth-transition">
          Learn More
        </button>
      </div>
    </div>
  </section>

  {/* <!-- Footer --> */}
  <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <img src="jobConnect.png" alt="jobConnect logo" className="h-10 w-10"/>
            <span className="text-2xl font-bold text-white">jobConnect</span>
          </div>
          <p className="mb-6">Premium job board connecting top talent with leading companies worldwide.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white smooth-transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white smooth-transition"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-400 hover:text-white smooth-transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white smooth-transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">For Candidates</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white smooth-transition">Browse Jobs</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Create Profile</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Job Alerts</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Career Advice</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">For Employers</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white smooth-transition">Post a Job</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Browse Candidates</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Pricing Plans</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Recruitment Solutions</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white smooth-transition">About Us</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Contact</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Careers</a></li>
            <li><a href="#" className="hover:text-white smooth-transition">Blog</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© 2025 jobConnect. All rights are not reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white smooth-transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white smooth-transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white smooth-transition">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
  </body>
    
  )
}

export default LandingPage
