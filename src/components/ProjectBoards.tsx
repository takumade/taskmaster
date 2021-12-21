import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import { exampleBoard } from '../seeds/boardExample'
import Column from './Column'




export default function ProjectBoards() {

  const onDragEnd = () => {


  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        exampleBoard.map((column, index) => {
            return <Column
                    key={index}
                    columnData={column}/>
        })
      }

    </DragDropContext>
  )
}
