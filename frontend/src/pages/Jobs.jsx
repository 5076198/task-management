import { useState, useEffect } from 'react'
import axios from 'axios'
import JobCard from '../components/JobCard'
import { HiSearch, HiFilter } from 'react-icons/hi'

const API_URL = import.meta.env.VITE_API_URL || '[localhost](http://localhost:5000/api)'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [search, type])

  const fetchJobs = async () => {
    try {
      const params = new URLSearchParams()
      if (search) params.append('search', search)
      if (type) params.append('type', type)
      
      const { data } = await axios.get(`${API_URL}/jobs?${params}`)
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship']

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold gradient-text mb-4">Explore Opportunities</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover {jobs.length}+ jobs that match your skills and interests
        </p>
      </div>

      {/* Filters */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search jobs or companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-12"
            />
          </div>
          <div className="relative">
            <HiFilter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="input-field pl-12 pr-8 appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              {jobTypes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No jobs found</h3>
          <p className="text-slate-500">Try adjusting your search filters</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Jobs
