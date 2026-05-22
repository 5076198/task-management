import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { HiBriefcase, HiLogout, HiUser, HiHome, HiCollection } from 'react-icons/hi'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <HiBriefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">JobHub</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="flex items-center space-x-1 text-slate-600 hover:text-primary-600 font-medium transition-colors">
                <HiHome className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/jobs" className="flex items-center space-x-1 text-slate-600 hover:text-primary-600 font-medium transition-colors">
                <HiCollection className="w-5 h-5" />
                <span>Jobs</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role === 'employer' && (
                  <>
                    <Link to="/dashboard" className="text-slate-600 hover:text-primary-600 font-medium">Dashboard</Link>
                    <Link to="/post-job" className="btn-primary text-sm py-2">Post Job</Link>
                  </>
                )}
                {user.role === 'jobseeker' && (
                  <Link to="/my-applications" className="text-slate-600 hover:text-primary-600 font-medium">My Applications</Link>
                )}
                <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                      <HiUser className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{user.name}</span>
                  </div>
                  <button onClick={handleLogout} className="p-2 text-slate-500 hover:text-red-500 transition-colors">
                    <HiLogout className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary text-sm py-2">Login</Link>
                <Link to="/register" className="btn-primary text-sm py-2">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
