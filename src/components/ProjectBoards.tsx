import React, {useEffect} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {exampleBoard} from '../seeds/boardExample'
import BoardColumn from './Column'
import {useRecoilState} from 'recoil';
import boardState from '../atoms/boardState';
import styled from 'styled-components';
import ProjectBoardController from '../controllers/projectBoardController'
import NewColumn from './board/NewColumn';

const Container = styled.div `
    display: flex;
  `

export default function ProjectBoards() {

    const [board,
        setBoard] = useRecoilState(boardState);

    useEffect(() => {
        setBoard(exampleBoard);
    }, [])

    let projectBoardCtrller = new ProjectBoardController(board);

    const onDragEnd = (result : any) => {
        let newBoard = projectBoardCtrller.handleOnDragEnd(result);
        newBoard
            ? setBoard(newBoard)
            : null;
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <Container>
                {board.map((column, index) => {
                    return <BoardColumn key={column.id} index={index} columnData={column}/>
                })


}

<NewColumn/>
            </Container>
        </DragDropContext>
    )
}
