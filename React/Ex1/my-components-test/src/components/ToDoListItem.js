export const ToDoListItem = (props) => {

    


  return (
    <li>
      <input type="checkbox" checked={props.item.isCompleted}
      onChange={ (e) => props.onTaskChanged(e, props.item)}></input> {props.item.name} <button onClick={ (e) => props.onRemoveTask(e, props.item)}>Excluir</button>
    </li>
  );
};
