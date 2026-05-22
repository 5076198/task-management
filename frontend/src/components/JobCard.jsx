import { Link } from 'react-router-dom'
import { HiLocationMarker, HiClock, HiCurrencyDollar, HiOfficeBuilding } from 'react-icons/hi'

const JobCard = ({ job }) => {
  const typeColors = {
    'Full-time': 'bg-green-100 text-green-700',
    'Part-time': 'bg-blue-100 text-blue-700',
    'Contract': 'bg-orange-100 text-orange-700',
    'Remote': 'bg-purple-100 text-purple-700',
    'Internship': 'bg-pink-100 text-pink-700'
  }

  return (
    <Link to={`/jobs/${job._id}`}>
      <div className="card group cursor-pointer hover:-translate-y-2">
        <div className="flex justify-between items-start mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
            <HiOfficeBuilding className="w-7 h-7 text-primary-600" />
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[job.type]}`}>
            {job.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
          {job.title}
        </h3>
        <p className="text-primary-600 font-semibold mb-4">{job.company}</p>

        <div className="space-y-2 text-slate-500 text-sm">
          <div className="flex items-center space-x-2">
            <HiLocationMarker className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiCurrencyDollar className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiClock className="w-4 h-4" />
            <span>{new Date(job.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-slate-600 text-sm line-clamp-2">{job.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
