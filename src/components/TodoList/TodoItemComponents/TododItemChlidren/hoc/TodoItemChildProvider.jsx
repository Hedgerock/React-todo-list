import { useEffect, useState } from 'react';
import { useTodoItemContext } from '../../../../hooks';
import TICCProvider from '../context/todoItemChildContext'

import { useGetMyNotations } from '../hooks';

export const TodoItemChildProvider = ({ children, info, childrenFullList, childIndex }) => {
    const { 
        data, 
        todo = [], 
        setTodo, 
        notificationData, 
        setNotificationData, 
        currentId, 
        initNewNotification, 
        title, 
        searchParam, 
        setSearchParam,
        buttonIcons,
        isChangable,
        curEl,
        allNotations
    } = useTodoItemContext();
    const { text, id, order: todoItemOrder, isDone } = data
    const [ changeStatus, setChangeStatus ] = useState(false);
    const [ editNotationHandler, setEditNotationHandler ] = useState(false);
    const { text:subtodoText, id:subtodoId, status:subtodoStatus, order:todoItemChildOrder, status, notation, count } = info

    const [ subTodoValue, setSubTodoValue ] = useState({ text: subtodoText, count })
    useEffect(() => {
        setSubTodoValue({text: subtodoText, count})
    }, [subtodoText, count])


    const { 
        notations, 
        setNotations, 
        myNotations, 
        actualNotation 
    } = useGetMyNotations({ notation, subTodoValue, subtodoId, subtodoText, count })

    const lastChildChildren = childIndex === childrenFullList.length - 1
        ? 'todo-item-text-block_last-child'
        : ''

    const firstChildChildren = childIndex === 0
    ? 'todo-item-text-block_first-child'
    : ''


    return (
        <TICCProvider
            value={{
                todo,
                setTodo,
                text,
                id,
                todoItemOrder,
                isDone,
                changeStatus,
                setChangeStatus,
                subtodoText,
                subtodoId,
                subtodoStatus,
                todoItemChildOrder,
                status,
                notificationData, 
                setNotificationData, 
                currentId, 
                initNewNotification,
                title,
                lastChildChildren,
                firstChildChildren,
                childrenFullList,
                searchParam,
                setSearchParam,
                childIndex,
                buttonIcons,
                subTodoValue, 
                setSubTodoValue,
                notation: actualNotation,
                isChangable,
                curEl,
                editNotationHandler, 
                setEditNotationHandler,
                myNotations,
                notations,
                setNotations,
                count,
                allNotations,
                data,
                info
            }}
        >
            { children }
        </TICCProvider>
    )
}