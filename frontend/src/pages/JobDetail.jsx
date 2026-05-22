import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { HiLocationMarker, HiCurrencyDollar, HiClock, HiOfficeBuilding, HiArrowLeft } from 'react-icons/hi'

const API_URL = import.meta.env.VITE_API_URL || '[localhost](http://localhost:5000/api)'

const JobDetail = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')

  useEffect(() => {
    fetchJob()
  }, [id])

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/jobs/${id}`)
      setJob(data)
    } catch (error) {
      toast.error('Job not found')
      navigate('/jobs')
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (e) => {
    e.preventDefault()
    if (!user) {
      toast.error('Please login to apply')
      return navigate('/login')
    }
    
    setApplying(true)
    try {
      await axios.post(`${API_URL}/applications/jobs/${id}/apply`, { coverLetter })
      toast.success('Application submitted successfully!')
      setShowModal(false)
      setCoverLetter('')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to apply')
    } finally {
      setApplying(false)
    }
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
      <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-slate-600 hover:text-primary-600 mb-6">
        <HiArrowLeft className="w-5 h-5" />
        <span>Back to Jobs</span>
      </button>

      <div className="card">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <HiOfficeBuilding className="w-10 h-10 text-primary-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{job.title}</h1>
            <p className="text-xl text-primary-600 font-semibold mb-4">{job.company}</p>
            <div className="flex flex-wrap gap-4 text-slate-600">
              <div className="flex items-center space-x-2">
                <HiLocationMarker className="w-5 h-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiCurrencyDollar className="w-5 h-5" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiClock className="w-5 h-5" />
                <span>{job.type}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Job Description</h2>
          <p className="text-slate-600 whitespace-pre-wrap mb-6">{job.description}</p>

          {job.requirements?.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-4">Requirements</h2>
              <ul className="space-y-2 mb-6">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2"></span>
                    <span className="text-slate-600">{req}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {user?.role === 'jobseeker' && (
            <button onClick={() => setShowModal(true)} className="btn-primary">
              Apply Now
            </button>
          )}
        </div>
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold gradient-text mb-6">Apply for {job.title}</h2>
            <form onSubmit={handleApply}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Cover Letter</label>
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell us why you're perfect for this role..."
                  required
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary flex-1">
                  Cancel
                </button>
                <button type="submit" disabled={applying} className="btn-primary flex-1 disabled:opacity-50">
                  {applying ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default JobDetail
