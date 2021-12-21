import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import Column from './Column'



export default function ProjectBoards() {
  return (
    <DragDropContext>
        <Column columnTitle="TODO" tasks={[]}/>
    </DragDropContext>
  )
}
