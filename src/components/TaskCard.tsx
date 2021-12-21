import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Task from '../interfaces/task'
import styled from 'styled-components';

export default function TaskCard(props: { task: Task; index: any }) {

  const { task, index } = props
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container

          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <SingularTask task={task} />
        </Container>
      )}
    </Draggable>
  )
}

const Container = styled.div`

  padding: 1px;

`;


function SingularTask(props: { task: Task }) {

  const { task } = props
  return (
    <div
    className="bg-white shadow rounded px-3 pt-3 pb-5 mb-3 border border-white">
        <div className="flex justify-between">
          <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">{task.title}</p>

          <img
            className="w-6 h-6 rounded-full ml-3"
            src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
            alt="Avatar"
          />
        </div>
        <div className="flex mt-4 justify-between items-center">
          <span className="text-sm text-gray-600">{task.date}</span>
          {/* Badges Go Here  */}
        </div>
      </div>
  )
}



