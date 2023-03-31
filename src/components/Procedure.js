import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Wcelogo from '../components/wcelogo.png'
import { useNavigate } from 'react-router-dom'
import './procedure.css'


const Procedure = () => {  
  const navigate = useNavigate()
  return (
    <>
    <div>
        <Toolbar id="header">
          <Typography variant="h6"  color="inherit" noWrap>
            <img id='logo' src={Wcelogo} alt='WCE' />
          </Typography>
            Walchand College of Engineering, Sangli
        </Toolbar>
    </div>
    <div className='box'>
      <div className='header'>
        <div>
        Procedure and Information
        </div>
        <div className='subtitle'>
        Transcript Related Rules
        </div>
      </div>
        <div className='part1'>
            <ol>
        <li>Candidate needs to submit filled application along with required documents in person or send it through authorized person (along with letter authorizing him/her to receive the transcripts on his/her behalf) in prescribed application available with the Examination Section office or on college website.</li>
        <br></br>
        <li>The name and addresses of the universities should be written on the covers, which will be supplied
        by the universities at the time of application.</li>
        </ol>
        <hr/>
        </div>
        <div className='header2'>
        <div>
        Required Documents
        </div>
        <div className='subtitle'>
        Transcript Related Rules
        </div>
      </div>
      <div className='part2'>
            <ol>
        <li>The students should bring the original Degree Certificate/Provisional Certificate; Consolidated Statement of Grade sheets/Marks sheets (All Semesters), and a proof of identity of the Candidate along with one set of legible photo copies (both front and back side) of the said certificates in a full scale envelope.</li>
        <br></br>
        <li>The students should also bring required number of attested photocopies of Degree Certificate/Provisional Certificate, mark/grade sheets and consolidated statement of marks/grades of the Examination Section office before issue of transcript.</li>
        <br></br>
        <li>Controller of Examination and Dean Academic will sign the Transcripts and envelopes (in which the Transcripts are put and sealed) and the applicant can collect the same after signed acknowledgment.</li>
        <br></br>
        <li>For every additional Transcript, student will pay Rs.700/-(Rupees Seven Hundred only). The payment can be made by online or DD of nationalized bank in favour of "Director Walchand College of Engg, Sangli."</li>
        </ol>
        </div>
        <div className='btn'>
            <button onClick={()=>{navigate('/form')}}>I Understand</button>
        </div>
    </div>
    <span className='span'></span>
    </>
  )
}

export default Procedure
