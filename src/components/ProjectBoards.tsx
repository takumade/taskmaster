import React, { useEffect } from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import { exampleBoard } from '../seeds/boardExample'
import BoardColumn from './Column'
import {useRecoilState,} from 'recoil';
import boardState from '../atoms/boardState';
import ProjectBoardController from '../controllers/projectBoardController'






export default function ProjectBoards() {

  const [board, setBoard] = useRecoilState(boardState);

  useEffect(() => {
    setBoard(exampleBoard);
  }, [])

  let projectBoardCtrller = new ProjectBoardController(board);


  const onDragEnd = (result:any) => {
      let newBoard = projectBoardCtrller.handleOnDragEnd(result);
      newBoard ? setBoard(newBoard) : null;
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
