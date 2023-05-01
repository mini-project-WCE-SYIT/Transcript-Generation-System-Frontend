import React from 'react'
import './ShowTranscript.css'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'

const ShowTranscript = () => {
  const docs = [
    {
      uri: 'http://localhost:5000/uploads/user-1682951693428-1682951693428.png',
    },
  ]

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
