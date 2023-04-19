import React from 'react'
import './template.css'
import { ReactDOM } from 'react'
import wcelogo from '../components/wcelogo.png'
import logo from './75logo.jpeg'
import tele from './telephone.png'

const Template2 = () => {
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
      <div className='class1'>
        <p>Ref:WCE/Transcript/2022/5779</p>
        <p>Date:29/11/2022</p>
      </div>
      <div className='class2'>
        <b>
          <u>Official Transcripts Certificate</u>
        </b>
      </div>
      <table border={2} className='table3'>
        <tr>
          <th colSpan={8}>
            {' '}
            <b>Student Information</b>
          </th>
        </tr>
        <tr className='class3'>
          <td colSpan={2}>Name of Student</td>
          <td colSpan={2}>
            Mr.Gorule Shubham <br />
            Nishikant Swati
          </td>
          <td colSpan={2}>PRN</td>
          <td colSpan={2}>2017BTECHME00068</td>
        </tr>
        <tr className='class3'>
          <td colSpan={2}>Programme of Study</td>
          <td colSpan={2}>
            B.Tech.Mechanical <br /> Engineering
          </td>
          <td colSpan={2}>Duration of Programme</td>
          <td colSpan={2}>4 Years</td>
        </tr>
        <tr className='class3'>
          <td colSpan={2}>Period of Study</td>
          <td colSpan={2}>July 2017 to July 2021</td>
          <td colSpan={2}>
            Month and Year of <br />
            Programme Completion
          </td>
          <td colSpan={2}>July 2021</td>
        </tr>
        <tr className='class3'>
          <td colSpan={2}>Medium of Instruction</td>
          <td colSpan={2}>English</td>
          <td colSpan={2}>Result</td>
          <td colSpan={2}>
            8.12 <br />
            <b>PASS</b>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>First Year</td>
          <td colSpan={2}> Second Year</td>
          <td colSpan={2}>Third Year</td>
          <td colSpan={2}>Final Year</td>
        </tr>
        <tr>
          <td>
            <b>Sem-I</b>
          </td>
          <td>
            <b>Sem-II</b>
          </td>
          <td>
            <b>Sem-I</b>
          </td>
          <td>
            <b>Sem-II</b>
          </td>
          <td>
            <b>Sem-I</b>
          </td>
          <td>
            <b>Sem-II</b>
          </td>
          <td>
            <b>Sem-I</b>
          </td>
          <td>
            <b>Sem-II</b>
          </td>
        </tr>
        <tr>
          <td>SPI</td>
          <td>SPI</td>
          <td>SPI</td>
          <td>SPI</td>
          <td>SPI</td>
          <td>SPI</td>
          <td>SGPA</td>
          <td>SGPA</td>
        </tr>
        <tr>
          <td>7.80</td>
          <td>8.09</td>
          <td>7.78</td>
          <td>6.67</td>
          <td>7.57</td>
          <td>8.42</td>
          <td>9.44</td>
          <td>9.73</td>
        </tr>
        <tr>
          <td colSpan={8}>
            <b>Note:-In the above table, SPI & SGPA are the same</b>
          </td>
        </tr>
        <tr className='class4'>
          <td colSpan={8}>
            <b> About the College and Programme</b>
          </td>
        </tr>
        <tr className='class5'>
          <td colSpan={8}>
            Walchand College of Engineering Sangli (WCE), established in 1947,
            is one of the oldest and premier engineering instituions in India.
            It is a Govt.aided autonomous institute catering nearly 2500
            students for UG,PG and PhD programs in various disciplines of
            engineering. With a rich history of over 70 years and a beautiful
            campus of over 90-acers, the institute is providing unique learning
            experiences for the students across a spectrum of engineering
            disciplines.
            <br />
            The institute is affiliated to Shivaji University, Kolhapur and is
            approved by AICTE, New Delhi.It is also given autonomous status by
            UGC since 2007.It has all its programs NBA accredite and also has
            received 'A' grade from National Assessment and Accreditation
            Council(NAAC),Bangalore. The institute has 6 UG and 10PG programs.It
            also has PhD programs under Shivaji University, National Doctoral
            Fellowship of AICTE and under Quality Improvement Program (QIP)
            scheme of Ministry of Human Resource Development(MHRD).
            <br />
            The curriculum of UG programme provides i)broad based knowledge;
            ii)quality content of courses; iii) academic flexibility; iv)scope
            for multi-disciplinary learning activities; v)opportunity for
            industry oriented projects. The curriculum designed is in line with
            the out-come based eductaion and has courses on Humanities, Social
            science and Management, Basic sciences including mathematics,
            Engineering science, Professional core, Professional elective, Open
            elective, Project work, Seminar, and Internship in industry.{' '}
          </td>
        </tr>
      </table>
      <div className='class6'>
        <p>Date: 29/11/2022</p>
        <p className='class7'>Dean Academics</p>
      </div>
    </>
  )
}
export default Template2
