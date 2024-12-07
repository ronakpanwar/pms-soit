import React from 'react'

const HomeContent = () => {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h4 className="card-title text-center text-primary mb-4">About Our Placement Portal</h4>
              <p className="card-text fs-8 text-secondary">
                Welcome to the <strong>Placement Portal</strong> of <strong>School of Information Technology</strong>. Our platform is exclusively for students of SOIT, providing a central hub for placement opportunities. It helps students stay updated with company openings, apply for on-campus job positions, and access important resources such as resume-building tools, interview tips, and career counseling.
              </p>
              <p className="card-text fs-8 text-secondary">
                The portal manages and maintains critical data such as student profiles, company profiles, and job listings from companies actively recruiting on campus. It ensures that students have all the resources they need to apply for jobs and internships with ease and efficiency.
              </p>
              <hr className="my-4" />
              <h4 className="text-center text-primary mb-3">Exclusive Access for Students</h4>
              <p className="fs-8 text-secondary">
                Our platform is designed specifically for students of Colleges. Students can view the latest job openings from top companies, apply directly through the portal, and track their application status. With dedicated sections for both students and companies, this portal ensures a seamless recruitment process.
              </p>
              <div className="text-center mt-4">
                <a href="/" className="btn btn-primary px-4 py-2">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
