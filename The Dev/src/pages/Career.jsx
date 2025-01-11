import React from 'react'
import './css/Career.css'
import { HiArrowLongRight } from "react-icons/hi2";
const Career = () => {
  const jobs = [
    {
      title: 'Sr React Developer',
      type: 'Development',
      location: 'Remote / Nagpur',
      employmentType: 'Full Time',
      link: 'https://example.com/apply/senior-react-developer'
    },
    {
      title: 'Backend Developer',
      type: 'Development',
      location: 'Remote / Pune',
      employmentType: 'Part Time',
      link: 'https://example.com/apply/backend-developer'
    },
    {
      title: 'UI/UX Designer',
      type: 'Design',
      location: 'Remote / Bangalore',
      employmentType: 'Contract',
      link: 'https://example.com/apply/ui-ux-designer'
    },
    {
      title: 'Project Manager',
      type: 'Management',
      location: 'Remote / Hyderabad',
      employmentType: 'Full Time',
      link: 'https://example.com/apply/project-manager'
    },
    {
      title: 'DevOps Engineer',
      type: 'Operations',
      location: 'Remote / Chennai',
      employmentType: 'Full Time',
      link: 'https://example.com/apply/devops-engineer'
    },
    {
      title: 'Data Scientist',
      type: 'Data Analysis',
      location: 'Remote / Delhi',
      employmentType: 'Full Time',
      link: 'https://example.com/apply/data-scientist'
    },
    {
      title: 'Product Owner',
      type: 'Product',
      location: 'Remote / Mumbai',
      employmentType: 'Full Time',
      link: 'https://example.com/apply/product-owner'
    }
  ];
  return (
    <section className='main-career'>
      <div className='career-hero'>
        <div className='hero-content'>
          <p className='hero-para'><span>Are you passionate about making a difference?</span> Join our team of talented individuals who are building the future of TARS with innovative technology. We offer a collaborative work environment, opportunities for professional growth, and the chance to be part of something truly groundbreaking.</p>
        <a href="" className='explore-career'>Explore</a>
        </div>
        <div className='hero-images'>
          <div id='hero-left'></div>
          <div id='hero-mid'></div>
          <div id='hero-right'></div>
        </div>
      </div>
      <div className="jobs-portal">
        <h2 id='jobs-title'>OPEN POSTIONS</h2>
        {jobs.map((job, index) => (
        <div className="job-card" key={index}>
          <div className="job-details">
            <div className="job-info">
              <div className="job-title">{job.title}</div>
              <div className="job-type">{job.type}</div>
            </div>
            <div className="job-sub">
              <div className="job-location">{job.location}</div>
              <div className="job-type">{job.employmentType}</div>
            </div>
            <a href={job.link} className="apply-button">
              <span className="apply-text">Apply</span>
              <HiArrowLongRight className="apply-arrow" size={30} />
            </a>

          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Career