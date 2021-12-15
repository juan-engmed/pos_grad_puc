import { useState } from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const defaultListItems = [
    { name: "Tarefa 1", isCompleted: false },
    { name: "Tarefa 2", isCompleted: false },
    { name: "Tarefa 3", isCompleted: false },
    { name: "Tarefa 4", isCompleted: false },
  ];

  const [items, setItems] = useState(defaultListItems);
  const [taskValue, setTaskValue] = useState("");

  const handleTaskSubmit = (event) => {
    if (items.find((i) => i.name === taskValue)) {
      event.preventDefault();
      return;
    } else setItems([...items, { name: taskValue, isCompleted: false }]);

    //Limpar input de texto para digitar novamente
    setTaskValue("");

    event.preventDefault();
  };

  //Marcar o Checkbox
  const handleOnTaskChanged = (e, item) => {
    setItems(
      items.map((i) => {
        if (i.name === item.name) {
          return { ...i, isCompleted: e.target.checked };
        }

        return i;
      })
    );
  };

   //Remover item
 const handleRemoveTask = (e, item) => {
    setItems(items.filter( i => i.name !== item.name))
}



  return (
    <div className="todo-list-container">

      <p>
        Você ja concluiu {items.filter((i) => i.isCompleted).length} tarefas de um total de {items.length}
      </p>

      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        ></input>
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {items.map((item) => (
          <ToDoListItem onTaskChanged={handleOnTaskChanged} onRemoveTask={handleRemoveTask} item={item} />
        ))}
      </ul>
    </div>
  );
};
