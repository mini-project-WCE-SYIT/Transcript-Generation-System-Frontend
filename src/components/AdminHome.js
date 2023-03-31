import * as React from 'react'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn'
import Appbar from './Utils/Appbar'
import './AdminHome.css'
import * as API from '../API/FormRequest'

function AdminHome() {
  const [applicants, setApplicants] = React.useState([])
  const fetch = async () => {
    const res = await API.getAllApplicants()
    console.log(res.data.applicants)
    setApplicants(res.data.applicants)
  }
  React.useEffect(() => {
    fetch()
  }, [])
  var count = 0
  if (applicants.length === 0) {
    return (
      <>
        <Appbar />

        <div className='home'>
          <div className='home-header'>
            <div>
              <ImportContactsIcon className='open' />
              {applicants.length} Open
            </div>
            <div>
              <DoNotDisturbOnIcon className='open' /> 3 Closed
            </div>
          </div>
          <div className='home-content'>
            No Request Pending
            <div className='subtitle'>New request will be shown here</div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Appbar />

        <div className='home'>
          <div className='home-header'>
            <div>
              <ImportContactsIcon className='open' />
              {applicants.length} Open
            </div>
            <div>
              <DoNotDisturbOnIcon className='open' /> 3 Closed
            </div>
          </div>
          <div className='home-container'>
            <div className='home-content-heading'>
              <div className='subtitle sub-one'>Sr. No. </div>
              <div className='subtitle sub-one'>Branch </div>
              <div className='subtitle sub-two'>Name</div>
              <div className='subtitle sub-three'>Year of Study</div>
            </div>
            {applicants.map((applicant) => {
              return (
                <div className='home-content'>
                  <div className='subtitle sub-one'>{++count} </div>
                  <div className='subtitle sub-one'>{applicant.branch} </div>
                  <div className='subtitle sub-two'>
                    {applicant.firstName} {applicant.lastName}
                  </div>
                  <div className='subtitle sub-three'>{applicant.yos}</div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default AdminHome
