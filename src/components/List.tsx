
export function ListTask(){
  const tasks=
  [{ id :"t1",text:"Learn react",urgent:true},
    {id : "t2",text:"Build a project",urgent:true}
  ];
   
  return (
    <ul>
     {tasks
     .filter(task => task.urgent)
     .map(task => (
      <li key={task.id}>{task.text}</li>
     ))
     }
    </ul>
  )
}