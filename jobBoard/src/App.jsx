import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
          <button className="px-4 py-2 font-medium rounded-lg hover:bg-gray-100 smooth-transition">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-400 smooth-transition">Post a Job</button>
        </div>
      </div>
    </div>
  </nav>

  {/* <!-- Hero Section --> */}
  <section className="gradient-bg text-white">
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
  </section>

  {/* <!-- Featured Companies --> */}
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by Top Companies</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Join thousands of companies already using ElevateJobs to find their perfect candidates</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <img src="google.png" alt="Google company logo - modern colorful branding" class="h-16 object-contain opacity-70 hover:opacity-100 smooth-transition"/>
        <img src="apple.png" alt="Apple company logo - minimalist black apple silhouette" class="h-16 object-contain opacity-70 hover:opacity-100 smooth-transition"/>
        <img src="microsoft.png" alt="Microsoft company logo - colorful window panes logo" class="h-16 object-contain opacity-70 hover:opacity-100 smooth-transition"/>
        <img src="amazon.png" alt="Amazon company logo - smile logo with arrow" class="h-12 object-contain opacity-70 hover:opacity-100 smooth-transition"/>
        <img src="netflix.png" alt="Netflix company logo - bold red typography" class="h-10 object-contain opacity-70 hover:opacity-100 smooth-transition"/>
        <img src="spotify.png" alt="Spotify company logo - vibrant green circular logo" class="h-12 object-contain opacity-70 hover:opacity-100 smooth-transition"/>
      </div>
    </div>
  </section>

  {/* <!-- Job Listings --> */}
  <section className="py-16">
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
        {/* <!-- Job Card 1 --> */}
        <div className="job-card bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg smooth-transition">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <img src="google.png" alt="Google company logo on a white background" className="w-14 h-14 object-contain rounded-lg"/>
              <div>
                <h3 className="font-bold text-lg">Senior Product Designer</h3>
                <div className="flex items-center text-gray-500 space-x-4 mt-1">
                  <span className="flex items-center"><i className="fas fa-building mr-2"></i> Google</span>
                  <span className="flex items-center"><i className="fas fa-map-marker-alt mr-2"></i> Remote</span>
                </div>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
          </div>
          <p className="mt-4 text-gray-600">We're looking for an experienced designer to join our product team and help shape the future of our user experience.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">UI/UX</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Figma</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Prototyping</span>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-500">Posted 2 days ago</span>
            <button className="text-primary font-medium hover:text-primary/80 smooth-transition">View Details →</button>
          </div>
        </div>
        
        {/* <!-- Job Card 2 --> */}
        <div className="job-card bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg smooth-transition">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <img src="apple.png" alt="Apple company logo on a white background" className="w-14 h-14 object-contain rounded-lg"/>
              <div>
                <h3 className="font-bold text-lg">iOS Developer</h3>
                <div className="flex items-center text-gray-500 space-x-4 mt-1">
                  <span className="flex items-center"><i className="fas fa-building mr-2"></i> Apple</span>
                  <span className="flex items-center"><i className="fas fa-map-marker-alt mr-2"></i> Cupertino, CA</span>
                </div>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Contract</span>
          </div>
          <p className="mt-4 text-gray-600">Join our iOS team to develop cutting-edge applications that millions of users interact with every day.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Swift</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">UIKit</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Xcode</span>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-500">Posted 1 week ago</span>
            <button className="text-primary font-medium hover:text-primary/80 smooth-transition">View Details →</button>
          </div>
        </div>
        
        {/* <!-- More job cards would follow the same pattern --> */}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 smooth-transition">
          Browse All Jobs
        </button>
      </div>
    </div>
  </section>

  {/* <!-- Featured Categories --> */}
  <section className="py-16 bg-gray-50">
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
  </section>

  {/* <!-- Testimonials --> */}
  <section className="py-16 bg-white">
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
    </>
  )
}

export default App
