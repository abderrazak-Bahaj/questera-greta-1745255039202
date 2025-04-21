import { motion } from 'framer-motion';
import { FiPlay, FiClock, FiCheckCircle } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-8">My Learning Dashboard</h1>
          
          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Courses in Progress</h3>
              <p className="text-3xl font-bold text-primary-600">3</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Completed Courses</h3>
              <p className="text-3xl font-bold text-primary-600">2</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">Hours Learned</h3>
              <p className="text-3xl font-bold text-primary-600">45</p>
            </div>
          </div>

          {/* Current Courses */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Current Courses</h2>
            <div className="space-y-6">
              {currentCourses.map((course) => (
                <div key={course.id} className="flex flex-col md:flex-row md:items-center gap-6 p-6 border border-gray-200 rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FiClock className="w-4 h-4 mr-2" />
                      {course.duration} remaining
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Continue
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Courses */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Completed Courses</h2>
            <div className="space-y-6">
              {completedCourses.map((course) => (
                <div key={course.id} className="flex flex-col md:flex-row md:items-center gap-6 p-6 border border-gray-200 rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <div className="flex items-center text-green-600">
                      <FiCheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </div>
                  </div>
                  <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const currentCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    duration: '8 hours',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    duration: '12 hours',
    progress: 35,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const completedCourses = [
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'JavaScript Basics',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default Dashboard;