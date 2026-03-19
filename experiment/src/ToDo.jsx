const ToDoList = ['Eat', 'Sleep', 'Work', 'Code'];

const ToDo = () => (
    <div>
        <ul>
        <li>
            {ToDoList.map((element) => element)}
            </li>            
        </ul>
        </div>
)

export default ToDo