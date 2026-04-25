import React from 'react'

const Experience = () => {
  return (
<div id="experience"className="max-w-6xl scroll-mt-24 min-h-screen flex flex-col items-center gap-6 md:gap-20  mx-auto mt-10">
  <h3 className="text-4xl font-semibold mb-6 text-center  text-gray-800">Experience</h3>

  <div className="space-y-6 w-full">

    {/* Projects */}
    <div className="bg-white p-6 rounded-xl shadow-md mx-auto md:max-">
      <h4 className="text-lg font-bold text-gray-700">
        Full Stack Developer (Projects)
      </h4>
      <p className="text-sm text-gray-500 mb-3">2024 - Present</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Built E-commerce, Food Delivery, and Freelancing websites</li>
        <li>Used HTML, CSS, Js, Bootstrap, PHP, Next.js, MySQL</li>
        <li>Designed UI with Tailwind CSS</li>

      </ul>
    </div>
    {/* Learning  */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="text-lg font-bold text-gray-700">
        Ongoing Learning
      </h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Currently learning Next.js framework</li>
        <li>Node.js and Express.js for backend development</li>
      </ul>
    </div>

   

    {/* Django */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="text-lg font-bold text-gray-700">
        Django Development
      </h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Built backend systems using Django framework</li>
        <li>Worked with database integration and MVC architecture</li>
      </ul>
    </div>

    {/* ML Workshop */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="text-lg font-bold text-gray-700">
        Machine Learning Workshop
      </h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Completed hands-on ML workshop</li>
        <li>Learned data preprocessing and basic ML models</li>
      </ul>
    </div>

  </div>
</div>
  )
}

export default Experience
