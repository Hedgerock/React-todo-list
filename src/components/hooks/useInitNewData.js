import { useEffect, useState } from "react";
import { uniqueId } from '../../utils/uniqueId'
import { useTodoContext } from "./useTodoContext";
import { valueInterface } from "../../data";

export const useInitNewData = ({ mainData, initDataFunction, isDataWithTitle, mainId, isNotChildElement }) => {
    const [value, setValue] = useState(valueInterface);

    useEffect(() => {

        setValue(prev => ({...prev, content: mainData}))

    }, [mainData])

    const { todo, contentInputData } = useTodoContext();
    const myId = uniqueId(todo)
    const altTitle = isDataWithTitle 
        ? `Todo collection number ${ isNotChildElement 
            ? myId 
            : contentInputData.indexOf(contentInputData.find(el => el.id === mainId)) + myId }` 
        : null;

    const initNewData = () => {
        initDataFunction(value);
        setValue(valueInterface);
    }

    return { value, setValue, initNewData, title: value.title, content: value.content, altTitle }
}