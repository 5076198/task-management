import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Dashboard from './pages/Dashboard'
import PostJob from './pages/PostJob'
import MyApplications from './pages/MyApplications'

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" toastOptions={{
        style: { background: '#4f46e5', color: '#fff', borderRadius: '12px' }
      }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/dashboard" element={
          <ProtectedRoute roles={['employer', 'admin']}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/post-job" element={
          <ProtectedRoute roles={['employer', 'admin']}>
            <PostJob />
          </ProtectedRoute>
        } />
        <Route path="/my-applications" element={
          <ProtectedRoute roles={['jobseeker']}>
            <MyApplications />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
