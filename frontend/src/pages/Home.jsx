import { Link } from 'react-router-dom'
import { HiSearch, HiLightningBolt, HiShieldCheck, HiUsers } from 'react-icons/hi'

const Home = () => {
  const features = [
    { icon: HiLightningBolt, title: 'Fast Matching', desc: 'Find perfect jobs instantly with our smart algorithm' },
    { icon: HiShieldCheck, title: 'Verified Companies', desc: 'All employers are verified for your safety' },
    { icon: HiUsers, title: 'Large Network', desc: 'Connect with thousands of top employers' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Find Your <span className="text-yellow-300">Dream Job</span><br />Today
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Connect with top companies and discover opportunities that match your skills and aspirations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs" className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:text-primary-800 transform hover:scale-105 transition-all shadow-2xl">
                <HiSearch className="w-5 h-5" />
                <span>Browse Jobs</span>
              </Link>
              <Link to="/register" className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                <span>Get Started Free</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="[w3.org](http://www.w3.org/2000/svg)">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Why Choose JobHub?</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide the best tools and resources to help you land your dream job.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="card text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8">Join thousands of job seekers who found their dream jobs through JobHub.</p>
          <Link to="/register" className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:text-primary-800 transform hover:scale-105 transition-all shadow-lg">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
