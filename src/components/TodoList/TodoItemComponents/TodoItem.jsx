
import { useTodoItemContext } from '../../hooks';
import { AddSubTodo } from './AddSubTodo';
import './TodoItem.css'
import { TodoItemDeleteButton } from './TodoItemDeleteButton';
import { TodoValue } from './TododItemChlidren/TodoValue';
import { TitleBox, TitleBoxProvider } from './TitleBox';
import { TodoItemCheckbox } from './TodoItemCheckbox';

export const TodoItem = () => {
    const { actualClassName, lastChildClassName } = useTodoItemContext();
    
    return (
        <div className= { `${actualClassName} ${ lastChildClassName }` }>

            <TodoItemCheckbox />
            
            <TodoValue />

            <AddSubTodo />

            <TitleBoxProvider>
                <TitleBox />
            </TitleBoxProvider>

            <TodoItemDeleteButton />
        </div>
    )
}