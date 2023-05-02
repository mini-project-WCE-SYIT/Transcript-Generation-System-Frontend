import React, { useEffect, useState } from 'react'
import './ShowTranscript.css'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import * as API from '../API/FormRequest'

const ShowTranscript = ({ _id }) => {
  const [docs, setDocs] = useState([])
  const fetch = async () => {
    console.log(_id)
    const res = await API.getReportDetails({ _id })
    console.log(res.data.report)
    setDocs(
      res.data.report.map((report) => {
        return { uri: report.imageURL }
      })
    )
  }

  useEffect(() => {
    fetch()
  }, [])

  console.log(docs)
  return (
    <>
      <div className='transcriptMain'>
        <h2>Transcript</h2>
        <div className='transcrpit'>
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        </div>
      </div>
    </>
  )
}

export default ShowTranscript
