import { useState } from "react"

export default function Todo(){
     
  const [todos,setTodos]=useState([
    {id:1,text:"learn react"},
    {id:2,text:"revise node"}
  ]);
  const [task,setTask]=useState("");
  const [error, setError] = useState('');

    const handleInputChange=(e)=>{
        setTask(e.target.value);
        setError(" ");

    }
  const handleSubmit=(e)=>{
    e.preventDefault();


    if(task.trim() === ""){
        setError("Task is empty");
        return;
    }
    const newTodo={
        id:Date.now(),
        text:task
    }
    setTodos((prevTodos) => [...prevTodos,newTodo]);
    setTask("");
    }
   const handleDeleteTask=(idToDelete)=>{
    setTodos((prevTodos)=> prevTodos.filter(todo => todo.id !== idToDelete));
   }
    
return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>📝 Task Manager</h2>

      {/* --- FORM SECTION --- */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="What needs to be done?"
          style={{ flexGrow: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
      </form>

      {error && <p style={{ color: 'red', fontSize: '14px', margin: '0 0 15px 0' }}>{error}</p>}
      <hr />

      {/* --- LIST SECTION --- */}
      {/* Conditional Rendering: If empty array, show placeholder text. Else, map array. */}
      {todos.length === 0 ? (
        <p style={{ color: 'gray', textAlign: 'center' }}>All caught up! 🎉</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {todos.map((todo) => (
            // The unique key goes on the outermost <li> tag
            <li 
              key={todo.id} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '10px', 
                borderBottom: '1px solid #eee',
                alignItems: 'center' 
              }}
            >
              <span>{todo.text}</span>
              <button 
                onClick={() => handleDeleteTask(todo.id)}
                style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
              >
                ✓ Done
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
