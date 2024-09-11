import React from 'react'
import PdfViewer from './pdfloader'

export default function Pdfviewerr() {

  const fileUrl = "https://res.cloudinary.com/digital-cats/image/upload/v1720767737/HQ_takeaway_1_sechbx.pdf"
  return (
    <div className='h-[500px] mt-20 mb-36 flex flex-col items-center gap-8 '>
      <h1 className="text-4xl md:text-4xl pb-8" > Our Restaurant Menu</h1>
      {/* <iframe src='https://res.cloudinary.com/digital-cats/image/upload/v1720767737/HQ_takeaway_1_sechbx.pdf' className='w-full h-full'>P</iframe> */}
      <PdfViewer fileUrl={fileUrl} />
    </div>

  )
}
