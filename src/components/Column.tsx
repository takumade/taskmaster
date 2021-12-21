import React from 'react'
import TaskCard from './TaskCard';

export default function Column(props: { columnTitle: any; tasks: any; }) {

  const { columnTitle, tasks } = props;
  return (

      <div className='bg-gray-100 rounded-lg px-3 py-3 column-width mr-4'>

          <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">{columnTitle}</p>

          <TaskCard/>
      </div>
  )
}
