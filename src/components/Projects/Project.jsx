const Project = (props) => {
  return (
    <div id="projects" className='w-full md:w-72 lg:w-80  bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300
     '>
      <img src={props.image} alt={props.title} className='w-full h-48 object-cover'/>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2 text-gray-700'>{props.title}</h3>
        <p className='text-gray-500 mb-4'>{props.description}</p>
        <div className='flex gap-2 mb-4'>
          <p className="font-semibold text-gray-700 text-md">Tech:</p>
          <p className='text-gray-500'>{props.tech}</p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <a href={props.demo} className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all'>Demo</a>
          <a href={props.code} className='bg-emerald-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all'>Code</a>
        </div>
      </div>
    </div>
  );
};

export default Project;