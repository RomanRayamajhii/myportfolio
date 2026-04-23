import React from 'react'

const About = () => {
  return (
 
        <div className="min-h-screen scroll-mt-24 px-6 md:px-12 py-10 md:py-20  bg-gray-100 " id="about" >
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className='max-w-5xl mx-auto flex flex-col gap-12'>
                
                <div className='text-center md:text-left'>
            <p className="text-gray-600 text-lg leading-relaxed">
        I'm Roman Rayamajhi, a passionate Full Stack Developer with experience in building dynamic and responsive web applications using React, Node.js, Django, and PHP. 
        I enjoy creating user-friendly interfaces and developing efficient backend systems that solve real-world problems.
        I have worked on projects such as e-commerce platforms, ticket booking systems, and food delivery applications, which helped me strengthen my skills in both frontend and backend development.
        I'm always eager to learn new technologies, improve my skills, and collaborate on innovative projects that create real impact.
      </p>
      </div>
        
            <div className=' gap-10 max-w-5xl mx-auto '>
                {/* skills */}
                <div>
                <h3 className="text-gray-800 mb-6 text-2xl font-semibold" >Skills</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li >React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>RESTful APIs</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>
                <div  >
                    {/* Edu */}
                    <h3 className="text-gray-800 mb-6 text-2xl font-semibold mt-6" >Education</h3>
                    <p className="text-gray-600 mb-6">
                        Bachelor of Computer Application <br />
                        Tribhuvan University, Nepal <br />
                        on-going
                    
                    </p>
                </div>
                <div >
                    {/* Learning */}
                    <h3 className="text-gray-800 mb-6 text-2xl font-semibold">Learning</h3>
                    <h3 className="text-gray-600 mb-6">
                        I'm currently learning Next.js, Tailwind CSS, and exploring more about backend development with Node.js and Express.
                    </h3>

                </div>
                <div >
                    {/* Interests */}
                    <h3 className="text-gray-800 mb-6 text-2xl font-semibold">Interests</h3>
                   <p className="text-gray-600 mb-6">
  I'm interested in web development, open-source contribution, and exploring new technologies. 
  I also have a growing interest in Artificial Intelligence and Machine Learning, and I plan to build intelligent and data-driven applications in the future. 
  In my free time, I enjoy hiking, photography, and traveling.
</p>
                </div>
                </div>

        </div>
        </div>
      
   
  )
}

export default About
