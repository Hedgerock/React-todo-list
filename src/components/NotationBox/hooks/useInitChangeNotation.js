import { useNotationContext } from "../../hooks/useNotationContext";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";


export const useInitChangeNotation = () => {
    const { value, valueIndex, mainIndex } = useNotationContext();
    const { mainData, setMainData, data } = useTodoFormItemContext();

    const curSubTodoNum = mainIndex + 1;
    const curValueNum = valueIndex + 1;
    
    const curretValuePlaceHolder = data.notation.value.length > 1 ? `(${ curValueNum })` : '';

    const actualPlaceholder = mainData.length > 1 
        ? `Notation for subtodo №${ curSubTodoNum } ${ curretValuePlaceHolder }` 
        : `Notation ${ curretValuePlaceHolder }`

    const initChangeNotation = (e) => {
        setMainData(prev =>{
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {...item.notation, value: item.notation.value.map(el => {
                        return el.id === value.id
                            ? {...el, text: e.target.value}
                            : el
                        })
                    }}
                    : item
            })
        })
    }

    const deleteNotation = () => {
        setMainData(prev =>{
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {...item.notation, value: item.notation.value.filter(el => el.id !== value.id)}}
                    : item
            })
        })
    }

    return { initChangeNotation, actualPlaceholder, deleteNotation }
}