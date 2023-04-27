import React from 'react'
import './template.css'
import { ReactDOM } from 'react'
import wcelogo from '../components/wcelogo.png'
import logo from './75logo.jpeg'
import tele from './telephone.png'
import { json } from 'react-router-dom'

const Template = ({ jsonData, applicants }) => {
  console.log('jsonData', jsonData)
  return (
    <>
      <div className='main'>
        <div className='first'>
          <img src={wcelogo} alt='mypic' className='logo' />
        </div>
        <div>
          <h2 className='head'>Walchand College of Engineering</h2>
          <p>(Government-Aided Autonomous Institute)</p>
          <p>Vishrambag, SANGLI-416415 (M.S) India</p>
          <p>Website: www.walchandsangli.ac.in</p>
        </div>
        <div className='second'>
          <img src={logo} alt='mypic' className='logo' />
        </div>
      </div>
      <div className='height'>
        <hr className='hr'></hr>
        <div className='middle'>
          <div className='page'>
            <img src={tele} alt='mypic' className='tele' />
          </div>
          <div>
            <p> Email : info@walchandsangli.ac.in</p>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className='exam'>
        <u>Examination Section</u>
      </div>
      <div className='name'>
        <p>
          Name:{' '}
          <b>
            {applicants[0].firstName} {applicants[0].lastName}
          </b>
        </p>
        <p>
          Examination Seat Number: <b>{applicants[0].prn}</b>
        </p>
      </div>
      <table border={2} className='table' style={{ textAlign: 'center' }}>
        <caption className='head'>
          <b>B.Tech. {applicants[0].branch}</b>
        </caption>
        <tr>
          <th rowSpan={2}> Course code </th>
          <th className='title' rowSpan={2}>
            {' '}
            Course Title
          </th>
          <th colSpan={3}>Hours Per Week </th>
          <th rowSpan={2}>Credits</th>
          <th rowSpan={2}>Grade</th>
        </tr>
        <tr>
          <th> Lecture </th>
          <th> Tutorial</th>
          <th> Practical</th>
        </tr>
        <tr>
          <th colSpan={8}>First Year:(2017-2018) SEM-I</th>
        </tr>
        {jsonData &&
          jsonData.map((data) => {
            if (data.sem === 1) {
              return (
                <tr>
                  <td>{data.courseCode.toUpperCase()}</td>
                  <td>{data.courseName}</td>
                  <td>{data.lec === 0 ? '--' : data.lec}</td>
                  <td>{data.tut === 0 ? '--' : data.tut}</td>
                  <td>{data.practice === 0 ? '--' : data.practice}</td>
                  <td>{data.creds === 0 ? '--' : data.creds}</td>
                  <td>{data.grades === 0 ? '--' : data.grades}</td>
                </tr>
              )
            }
          })}
        <tr>
          <th colSpan={8}>First Year:(2017-2018) SEM-II</th>
        </tr>
        {jsonData &&
          jsonData.map((data) => {
            if (data.sem === 2) {
              return (
                <tr>
                  <td>{data.courseCode.toUpperCase()}</td>
                  <td>{data.courseName}</td>
                  <td>{data.lec === 0 ? '--' : data.lec}</td>
                  <td>{data.tut === 0 ? '--' : data.tut}</td>
                  <td>{data.practice === 0 ? '--' : data.practice}</td>
                  <td>{data.creds === 0 ? '--' : data.creds}</td>
                  <td>{data.grades === 0 ? '--' : data.grades}</td>
                </tr>
              )
            }
          })}
      </table>
      <p className='para' style={{ textAlign: 'center' }}>
        $:Grade obtained in makeup examination.&nbsp; #:Grade obtaibed after
        grade improvement &nbsp; **:Contact Hours
      </p>
      <table border={2} className='table2' style={{ textAlign: 'center' }}>
        <tr>
          <th colSpan={7}>Performance</th>
        </tr>
        <tr>
          <th colSpan={2}>First Year Semester-I Courses</th>
          <th colSpan={2}>First Year Semester-II Courses</th>
          <th colSpan={2}>Cumulative</th>
        </tr>
        <tr>
          <td>Credits</td>
          <td>SPI</td>
          <td>Credits</td>
          <td>SPI</td>
          <td>Credits Earned</td>
          <td>CPI</td>
        </tr>
        <tr>
          <td>{jsonData[0].semCreds}</td>
          <td>{jsonData[0].semSPI}</td>
          <td>{jsonData[13].semCreds}</td>
          <td>{jsonData[13].semSPI}</td>
          <td>{jsonData[0].creadEarned}</td>
          <td>{jsonData[0].cpi}</td>
        </tr>
      </table>
      <div className='name'>
        <div className='pass'>
          <p>
            <b>Result:PASS</b>
          </p>
          <p>
            <b>Date:16th August 2018</b>
          </p>
        </div>
        <div className='control'>
          <p>
            {' '}
            <br></br>
            <b>Controller of Examination</b>
          </p>
        </div>
      </div>
    </>
  )
}
const Image = () => {
  return (
    <div>
      <img src='frontend/public/wcelogo.png' alt='mypic' className='logo' />
    </div>
  )
}
export default Template
