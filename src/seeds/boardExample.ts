
import Column from "../interfaces/column"

let column1: Column = {
  id: "1",
  title: "To do",
  tasks: [
    {
      id: "1",
      title: "Eat Cerevita",
      description: "Description 1",
      date: "2020-01-01"
    },
    {
      id: "2",
      title: "Eat Sadza",
      description: "Description 1",
      date: "2020-01-01"
    },
    {
      id: "3",
      title: "Eat Chicken",
      description: "Description 1",
      date: "2020-01-01"
    },
    {
      id: "4",
      title: "Eat Pizza",
      description: "Description 1",
      date: "2020-01-01"
    },
  ]
}

export const exampleBoard = [
  column1,
  {
    id: "2",
    title: "In progress",
    tasks: []
  },
  {
    id: "3",
    title: "Done",
    tasks: []
  }
]
