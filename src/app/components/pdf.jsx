import React from 'react'
import PdfViewer from './pdfloader'

export default function Pdfviewerr() {

  const fileUrl = "https://res.cloudinary.com/digital-cats/image/upload/v1720767737/HQ_takeaway_1_sechbx.pdf"
  return (
    <div className='h-[500px] mb-36 pt-5 flex flex-col items-center gap-8 '>
      <h1 className="text-xl" > Our Restaurant Menu</h1>
      {/* <iframe src='https://res.cloudinary.com/digital-cats/image/upload/v1720767737/HQ_takeaway_1_sechbx.pdf' className='w-full h-full'>P</iframe> */}
      <PdfViewer fileUrl={fileUrl} />
    </div>

  )
}
