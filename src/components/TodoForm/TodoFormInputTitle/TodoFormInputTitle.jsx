import { useTodoFormContext } from "../../hooks"
import { useCustomTodoData } from "../hooks";

export const TodoFormInputTitle = () => {
    const { title, setValue, enterEvent, mainData } = useTodoFormContext();
    const { initCreatingTodoProcess } = useCustomTodoData();

    return (
        <input 
            className='todo-form__input todo-form__input_title'
            type="text" 
            placeholder= 'Type your todo title'
            value={ title }
            onChange={ e => {

                setValue(prev => {
                    return {...prev, title: e.target.value}
                })
            }
            }

            onKeyDown={ (event) => enterEvent(event, mainData, initCreatingTodoProcess) }
        />
    )
}