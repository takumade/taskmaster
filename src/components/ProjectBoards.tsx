import React, { useEffect } from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import { exampleBoard } from '../seeds/boardExample'
import BoardColumn from './Column'

import Column from '../interfaces/column'

import {
  useRecoilState,
} from 'recoil';
import boardState from '../atoms/boardState';






export default function ProjectBoards() {

  const [board, setBoard] = useRecoilState(boardState);

  useEffect(() => {
    setBoard(exampleBoard);
  }, [])


  const onDragEnd = (result:any) => {
      console.log(result)

      const {destination, source, draggableId} = result;

      if (!destination){
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index){
        return;
      }

      const affectedColumn = board.filter((column:Column) => column.id == source.droppableId)[0];
      const destinationColumn = board.filter((column:Column) => column.id == destination.droppableId)[0];

      if (affectedColumn === destinationColumn){
        const newTasks = [...affectedColumn.tasks];

        const [removed] = newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, removed);


        let newColumn = {...affectedColumn, tasks: newTasks};
        const newBoard = board.map((column:Column) => column.id === source.droppableId ? newColumn : column);

        setBoard(newBoard);
      }else{
        const affectedColTasks = [...affectedColumn.tasks];
        const [removeTask] = affectedColTasks.splice(source.index, 1);

        const newAffectedColumn = {
          ...affectedColumn,
          tasks: affectedColTasks
        };

        const destColTasks = [...destinationColumn.tasks];
        destColTasks.push(removeTask);
        // destColTasks.splice(destination.index, 0, removeTask);

        const newDestinationColumn = {
          ...destinationColumn,
          tasks: destColTasks
        }


        let newBoard = board.map((column:Column) => column.id ==  newAffectedColumn.id ? newAffectedColumn : column);
        newBoard = newBoard.map((column:Column) => column.id == newDestinationColumn.id ? newDestinationColumn : column);
        setBoard(newBoard);

      }


  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        board.map((column, index) => {
            return <BoardColumn
                    key={index}
                    columnData={column}/>
        })
      }

    </DragDropContext>
  )
}
