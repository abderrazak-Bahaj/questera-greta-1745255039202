import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlay, FiClock, FiBook, FiAward, FiUser } from 'react-icons/fi';

const CourseDetail = () => {
  const { id } = useParams();
  // For demo purposes, we'll use hardcoded data
  const course = {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch with this comprehensive course. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    price: 99.99,
    duration: '12 weeks',
    lessons: 120,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Senior Software Engineer with 10+ years of experience in web development.',
    },
    curriculum: [
      {
        title: 'Introduction to Web Development',
        lessons: [
          'Course Overview',
          'Setting Up Your Development Environment',
          'HTML Basics',
        ],
      },
      {
        title: 'CSS Fundamentals',
        lessons: [
          'CSS Selectors and Properties',
          'Flexbox and Grid',
          'Responsive Design',
        ],
      },
      {
        title: 'JavaScript Essentials',
        lessons: [
          'Variables and Data Types',
          'Functions and Scope',
          'DOM Manipulation',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden mb-8"
        >
          <div className="relative h-96">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-opacity">
                <FiPlay className="w-8 h-8 text-primary-600" />
              </button>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Enroll Now - ${course.price}
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center text-gray-600">
                <FiClock className="w-5 h-5 mr-2" />
                {course.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <FiBook className="w-5 h-5 mr-2" />
                {course.lessons} lessons
              </div>
              <div className="flex items-center text-gray-600">
                <FiAward className="w-5 h-5 mr-2" />
                Certificate of completion
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Description</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-6">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center text-gray-600">
                          <FiPlay className="w-4 h-4 mr-3 text-primary-600" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Instructor Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Instructor</h2>
              <div className="flex items-center mb-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                  <p className="text-gray-600">Web Development Instructor</p>
                </div>
              </div>
              <p className="text-gray-600">{course.instructor.bio}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;