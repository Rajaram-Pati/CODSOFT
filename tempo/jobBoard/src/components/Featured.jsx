import React from 'react'

function Featured() {
  return (
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
  )
}

export default Featured
