import React from 'react'

export default function TaskCard() {
  return (
    <div>
      <div className="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div className="flex justify-between">
      <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">Eat cerevita</p>

      <img
        className="w-6 h-6 rounded-full ml-3"
        src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        alt="Avatar"
      />
    </div>
    <div className="flex mt-4 justify-between items-center">
      <span className="text-sm text-gray-600">Sept 14</span>
      {/* Badges Go Here  */}
    </div>
  </div>
    </div>
  )
}
