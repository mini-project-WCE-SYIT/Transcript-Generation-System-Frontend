import * as React from 'react'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn'
import Appbar from './Utils/Appbar'
import './AdminHome.css'
import * as API from '../API/FormRequest'
import * as XLSX from 'xlsx'
import popUp from '../Images/popUp.png'
import ShowTranscript from './ShowTranscript'

function AdminHome() {
  const [applicants, setApplicants] = React.useState([])
  const [fileUpload, setFileupload] = React.useState()
  const [jsonData, setJsonData] = React.useState([])
  const [geneTranscript, setGeneTranscript] = React.useState(false)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    // reader.onload = (event) => {
    //   const binaryData = event.target.result
    //   const workbook = XLSX.read(binaryData, { type: 'binary' })
    //   const sheetName = workbook.SheetNames[0]
    //   const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
    //   let sem = ''
    //   let name = ''
    //   let exam = ''
    //   let semCreds = ''
    //   let semSPI = ''
    //   let creadEarned = ''
    //   let cpi = ''
    //   let Year = ''
    //   sheetData.map((data) => {
    //     if (data.sem) {
    //       sem = data.sem
    //     } else {
    //       data.sem = sem
    //     }
    //     if (data.Name) {
    //       name = data.Name
    //     } else {
    //       data.Name = name
    //     }
    //     if (data.Examseat) {
    //       exam = data.Examseat
    //     } else {
    //       data.Examseat = exam
    //     }
    //     if (data.semCreds) {
    //       semCreds = data.semCreds
    //     } else {
    //       data.semCreds = semCreds
    //     }
    //     if (data.semSPI) {
    //       semSPI = data.semSPI
    //     } else {
    //       data.semSPI = semSPI
    //     }
    //     if (data.creadEarned) {
    //       creadEarned = data.creadEarned
    //     } else {
    //       data.creadEarned = creadEarned
    //     }
    //     if (data.cpi) {
    //       cpi = data.cpi
    //     } else {
    //       data.cpi = cpi
    //     }
    //     if (data.Year) {
    //       Year = data.Year
    //     } else {
    //       data.creadEarned = Year
    //     }
    //   })
    //   setJsonData(sheetData)
    // }

    reader.readAsBinaryString(file)
  }

  const generateTranscript = () => {
    setGeneTranscript(true)
  }
  // Next button
  const handleNext = () => {}
  const fetch = async () => {
    const res = await API.getAllApplicants()
    console.log(res.data.applicants)
    setApplicants(res.data.applicants)
  }

  React.useEffect(() => {
    fetch()
  }, [])
  React.useEffect(() => {
    console.log(jsonData)
  })

  var count = 0
  if (geneTranscript) {
    return (
      <>
        <ShowTranscript />
      </>
    )
  } else {
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
          <div className='mainDiv'>
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
                  <div className='subtitle sub-one'>PRN </div>
                  <div className='subtitle sub-two'>Name</div>
                  <div className='subtitle sub-three'>Year of Study</div>
                </div>
                {applicants.map((applicant) => {
                  return (
                    <div className='home-content' onClick={generateTranscript}>
                      <div className='subtitle sub-one'>{++count} </div>
                      <div className='subtitle sub-one'>{applicant.prn} </div>
                      <div className='subtitle sub-two'>
                        {applicant.firstName} {applicant.lastName}
                      </div>
                      <div className='subtitle sub-three'>{applicant.yos}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='buttonContainer'>
              <div className='excelBtn'>
                <label for='file-upload' class='file-upload-label'>
                  Add Sheet
                </label>
                <input
                  type='file'
                  value={fileUpload}
                  onChange={(e) => {
                    setFileupload(e.target.value)
                    handleFileUpload(e)
                  }}
                  id='file-upload'
                  class='hidden'
                />
              </div>
              <div className='popUp'>
                <img src={popUp} alt='' />
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}

export default AdminHome
