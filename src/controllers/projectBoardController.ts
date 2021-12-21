import Column from "../interfaces/column";

class ProjectBoardController {

    board: Column[];

    constructor(board: Column[]) {
      this.board = board;
    }

    getAffectedColumn = (source: { droppableId: string; }) => {
      return this.board.filter((column:Column) => column.id == source.droppableId)[0];
    }

    getDestinationColumn = (destination: { droppableId: string; }) => {
      return this.board.filter((column:Column) => column.id == destination.droppableId)[0];
    }

    handleOnDragEnd = (result:any)  =>{

      const {destination, source, draggableId} = result;

      if (!destination){
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index){
        return;
      }

      const affectedColumn = this.getAffectedColumn(source)
      const destinationColumn = this.getDestinationColumn(destination)

      if (affectedColumn === destinationColumn){
        return this.reorderColumnCards(affectedColumn, source, destination);
      }else{
        return this.moveCardToNewColumn(affectedColumn, destinationColumn, source);

      }

      return this.board;

    }

    reorderColumnCards = (affectedColumn: Column, source: { index: number; droppableId: string }, destination: { index: number }) => {
      const newTasks = [...affectedColumn.tasks];

          const [removed] = newTasks.splice(source.index, 1);
          newTasks.splice(destination.index, 0, removed);


          let newColumn = {...affectedColumn, tasks: newTasks};
          const newBoard = this.board.map((column:Column) => column.id === source.droppableId ? newColumn : column);

          return newBoard

    }

    moveCardToNewColumn = (affectedColumn:Column, destinationColumn:Column, source: { index: number }) => {
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


          let newBoard = this.board.map((column:Column) => column.id ==  newAffectedColumn.id ? newAffectedColumn : column);
          newBoard = newBoard.map((column:Column) => column.id == newDestinationColumn.id ? newDestinationColumn : column);

          return newBoard
    }



};


export default ProjectBoardController;
