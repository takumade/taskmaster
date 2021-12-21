import React from 'react'
import TaskCard from './TaskCard';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from '../interfaces/task';
import Column from '../interfaces/column';


const TaskList = styled.div`
  padding: 8px;
`;


export default function BoardColumn(props: {columnData:Column}) {

  const { columnData } = props;
  return (


              <div className='bg-gray-100 rounded-lg px-3 py-3 column-width mr-4'>

      <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">{columnData.title}</p>

      <Droppable droppableId={columnData.id} >
        {

          (provided) => (
            <TaskList
            ref={provided.innerRef} {...provided.droppableProps}
            >
              {columnData.tasks.map((task: Task, index: React.Key | null | undefined) => (
                <TaskCard key={task.id} index={index} task={task}  />
              ))}
              {provided.placeholder}
            </TaskList>
          )
        }

        </Droppable>


      </div>

  )

}



