import React, { useContext, useEffect, useState } from 'react'
import { AppContext, useAppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'
import {toast} from 'react-toastify'
import axios from 'axios'
const Dashboard = () => {
  const { currency, backendUrl, isEducator, getToken } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)
  const fetchDashboardData = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/dashboard', {
        headers:{Authorization:`Bearer ${token}`}
      })
      if (data.success) {
        setDashboardData(data.dashboardData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    if (isEducator) {
      fetchDashboardData()
   }
  },[isEducator])
  //  const { axios, getToken, user, image_base_url } = useAppContext()
//   const currency = import.meta.env.VITE_CURRENCY
//   const [dashboardData, setDashboardData] = useState('')
//   const [loading, setLoading]= useState(true)
//     // const [dashboardData, setDashboardData] = useState({
//     //     totalBookings: 0,
//     //     totalRevenue: 0,
//     //     activeShows: [],
//     //     totalUser: 0
//     // })
//     // const [loading, setLoading] = useState(true)
//     // const dashboardCards = [
//     //     { title: 'total bookings', value: dashboardData.totalBookings || '0', icon:assets.logo },
//     //     { title: 'total revenue', value: currency + dashboardData.totalRevenue || '0', icon:assets.logo },
//     //     { title: 'active shows', value: dashboardData.activeShows.length || '0', icon: assets.logo },
//     //     { title: 'total users', value: dashboardData.totalUser || '0', icon:assets.logo }
//     // ]
//     const fetchDashboardData = async () => {
//         // setDashboardData(dummyDashboardData)
//         // setLoading(false)
//         try {
//             const { data } = await axios.get('/api/educator/dashboard', {
//                 headers: {
//                     Authorization: `Bearer ${await getToken()}`
//                 }
//             })
//             if (data.success === true) {
//                 setDashboardData(data.dashboardData)
//               } else {
//                 toast.error(data.message)
//                 setLoading(false)
//             }
//         } catch (error) {
//             toast.error('error fetching dashboard data', error)
//         }
//     }
//     useEffect(() => {
//         if (user) {
//             fetchDashboardData()
//         }
//     }, [user])
// console.log('data', dashboardData)
  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.logo} alt='patients_icon' className='size-4'></img>
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.enrolledStudentsData.length}</p>
              <p className='text-base text-gray-500'>total enrollments</p>
            </div>
          </div>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.logo} alt='appointments_icon' className='size-4'></img>
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.totalCourses}</p>
              <p className='text-base text-gray-500'>total courses</p>
            </div>
          </div>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.logo} alt='earnings_icon' className='size-4'></img>
            <div>
              <p className='text-2xl font-medium text-gray-600'>{currency}{dashboardData.totalEarnings.toFixed(2)}</p>
              <p className='text-base text-gray-500'>total earnings</p>
            </div>
          </div>
        </div>
        <h2 className='pb-4 text-lg font-medium'>latest enrollments</h2>
        <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
          <table className='table-fixed md:table-auto w-full oveflow-hidden'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                <th className='px-4 py-3 font-semibold'>student name</th>
                <th className='px-4 py-3 font-semibold'>course title</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-500'>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index} className='border-b border-gray-500/20'>
                  <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                  <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                    <img src={item.student.image} alt='profile' className='w-9 h-9 rounded-full'></img>
                    <span className='truncate'>{item.student.name}</span>
                  </td>
                  <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Loading></Loading>
}

export default Dashboard