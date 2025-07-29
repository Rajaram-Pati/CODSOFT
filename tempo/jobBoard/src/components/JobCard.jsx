// JobCard.jsx
import React from "react";
import { Job_data } from "../store/JobData";

function JobCard() {
  return (
    <>
      {Job_data.map((data, index) => (
        <div
          key={index}
          className="job-card bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg smooth-transition"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <img
                src={data.Image}
                alt="Google company logo"
                className="w-14 h-14 object-contain rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg">{data.jobRole}</h3>
                <div className="flex items-center text-gray-500 space-x-4 mt-1">
                  <span className="flex items-center">
                    <i className="fas fa-building mr-2"></i> {data.company}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i> {data.location}
                  </span>
                </div>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {data.job_type}
            </span>
          </div>

          <p className="mt-4 text-gray-600">{data.job_desc}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {data.skills.map((skill, i) => (
              <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-500">Posted 2 days ago</span>
            <button className="text-primary font-medium hover:text-primary/80 smooth-transition">
              View Details →
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default JobCard;
