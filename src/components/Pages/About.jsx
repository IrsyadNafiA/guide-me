import React from 'react'
import Header from '../Utilities/Header'

function About() {
  return (
    <React.Fragment>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center text-center max-w-6xl gap-5'>
          <div>
            <Header title='BISMILLAH KE SURABAYA TEAM' />
            <p>The Guide Me application is an application created through collaboration between Batam City Tourism Office with BKS Team. Through this application we hope to help foreign tourists as well as local tourists who want to take a vacation to Batam City to easily find destinations in all of Batam City.</p>
          </div>
          <div>
            <Header title='DEVELOPER' />
            <div className='flex gap-5'>
              <div className="p-6 bg-white rounded-xl outline outline-1 outline-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <img src="" alt="ini gambar" />
              </div>
              <div className="p-6 bg-white rounded-xl outline outline-1 outline-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <img src="" alt="ini gambar" />
              </div>
              <div className="p-6 bg-white rounded-xl outline outline-1 outline-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <img src="" alt="ini gambar" />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Header title='PEMBIMBING' />
            <div className='flex gap-5'>
              <div className="p-6 bg-white rounded-xl outline outline-1 outline-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <img src="" alt="ini gambar" />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Header title='SUPPORT BY' />
            <img src="" alt="DINAS KEBUDAYAAN DAN PARIWISATA" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About