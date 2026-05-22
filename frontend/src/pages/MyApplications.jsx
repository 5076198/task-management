import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { HiExternalLink } from 'react-icons/hi'

const API_URL = import.meta.env.VITE_API_URL || '[localhost](http://localhost:5000/api)'

const MyApplications = () => {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/applications/my-applications`)
      setApplications(data)
    } catch (error) {
      console.error('Failed to load applications')
    } finally {
      setLoading(false)
    }
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    reviewed: 'bg-blue-100 text-blue-700 border-blue-200',
    shortlisted: 'bg-green-100 text-green-700 border-green-200',
    rejected: 'bg-red-100 text-red-700 border-red-200',
    hired: 'bg-purple-100 text-purple-700 border-purple-200'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold gradient-text mb-2">My Applications</h1>
      <p className="text-slate-600 mb-8">Track the status of your job applications</p>

      {applications.length === 0 ? (
        <div className="card text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No applications yet</h3>
          <p className="text-slate-500 mb-6">Start applying to jobs to see them here</p>
          <Link to="/jobs" className="btn-primary inline-block">
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map(app => (
            <div key={app._id} className="card">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <Link 
                    to={`/jobs/${app.job._id}`}
                    className="text-xl font-bold text-slate-800 hover:text-primary-600 flex items-center gap-2"
                  >
                    {app.job.title}
                    <HiExternalLink className="w-4 h-4" />
                  </Link>
                  <p className="text-primary-600 font-medium">{app.job.company}</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Applied on {new Date(app.appliedAt).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${statusColors[app.status]}`}>
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-700 mb-1">Your Cover Letter:</p>
                <p className="text-slate-600 text-sm">{app.coverLetter}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyApplications
