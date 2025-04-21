import { motion } from 'framer-motion';
import { FiUsers, FiDollarSign, FiStar, FiEdit, FiTrash2 } from 'react-icons/fi';

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Create New Course
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Total Students</h3>
                <FiUsers className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-3xl font-bold text-primary-600 mt-2">1,234</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Total Revenue</h3>
                <FiDollarSign className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-3xl font-bold text-primary-600 mt-2">$12,345</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Average Rating</h3>
                <FiStar className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-3xl font-bold text-primary-600 mt-2">4.8</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Active Courses</h3>
                <FiEdit className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-3xl font-bold text-primary-600 mt-2">5</p>
            </div>
          </div>

          {/* Course Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Your Courses</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4">Course</th>
                    <th className="text-left py-4 px-4">Students</th>
                    <th className="text-left py-4 px-4">Revenue</th>
                    <th className="text-left py-4 px-4">Rating</th>
                    <th className="text-left py-4 px-4">Status</th>
                    <th className="text-left py-4 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-b border-gray-200 last:border-0">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-12 h-12 rounded object-cover mr-4"
                          />
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <p className="text-sm text-gray-600">{course.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">{course.students}</td>
                      <td className="py-4 px-4">${course.revenue}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <FiStar className="w-4 h-4 text-yellow-400 mr-1" />
                          {course.rating}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-primary-600">
                            <FiEdit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600">
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    category: 'Programming',
    students: 456,
    revenue: 4560,
    rating: 4.8,
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    category: 'Design',
    students: 289,
    revenue: 2890,
    rating: 4.7,
    status: 'Draft',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    category: 'Marketing',
    students: 567,
    revenue: 5670,
    rating: 4.9,
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default InstructorDashboard;