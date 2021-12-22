import React from 'react'
import TaskCard from './TaskCard';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from '../interfaces/task';
import Column from '../interfaces/column';

const TaskList = styled.div `
  padding: 8px;
  min-width: 320px;
  width: 320px;
  min-height: 100px;
`;

const Container = styled.div `
display: flex;
flex-direction: column;
`

const Title = styled.h3 `
  padding: 8px;
  --tw-text-opacity: 1;
  color: rgba(64, 64, 64, var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  display: inline-block;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

export default function BoardColumn(props : {
    columnData: Column,
    index: number
}) {

    const {columnData, index} = props;
    return (

        <div>
                <Container>
                    <div className='bg-gray-100 rounded-lg px-3 py-3 mr-4'>

                        <Title>{columnData.title}</Title>

                        <Droppable droppableId={columnData.id} type="task">
                            {(provided) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className='min-h-screen'>

                                    {columnData.tasks.map((task : Task, index : React.Key | null | undefined) => (<TaskCard key={task.id} index={index} task={task}/>))}
                                    {provided.placeholder}
                                </TaskList>)}

                        </Droppable>

                    </div>
                </Container>


        </div>

    )

}
