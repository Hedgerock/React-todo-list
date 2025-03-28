import { useNotationContext } from "../../hooks/useNotationContext";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useInitChangeNotation } from "./useInitChangeNotation";

export const useNotationBoxButtons = () => {
    const { value, valueIndex, setMainData, buttonIcons } = useNotationContext();
    const { initChangeNotation, actualPlaceholder, deleteNotation } = useInitChangeNotation();
    const { data } = useTodoFormItemContext();
    const { delete: currentValue, up, down } = buttonIcons;

    const prevIndex = valueIndex - 1;
    const nextIndex = valueIndex + 1;

    const prevVal = data.notation.value[prevIndex];
    const nextVal = data.notation.value[nextIndex];

    const initPrevVal = () => {
        setMainData(prev => {
            return prev.map(item => {
                return item.id === data.id
                    
                ? {...item, notation: {
                    ...item.notation, value: item.notation.value
                        .map((el, ind) => {
                            if ( ind === prevIndex) return value;

                            if ( ind === valueIndex ) return prevVal;

                            return el
                        }
                    )
                }}

                : item
            })
        })
    }

    const initNextVal = () => {
        setMainData(prev => {
            return prev.map(item => {
                return item.id === data.id
                    
                ? {...item, notation: {
                    ...item.notation, value: item.notation.value
                        .map((el, ind) => {
                            if (ind === valueIndex) return nextVal;
                        
                            if (ind === nextIndex) return value;

                            return el
                        }
                    )
                }}

                : item
            })
        })
    }
    
    const notationButtons =[{
        id: 1,
            condition: !!prevVal,
            buttonFunc: initPrevVal,
            buttonModificator: 'up',
            buttonValue: up
        },
        { 
            id: 2,
            condition: !!nextVal,
            buttonFunc: initNextVal,
            buttonModificator: 'down',
            buttonValue: down
        },
        {
            id: 3,
            condition: valueIndex !== 0,
            buttonFunc: deleteNotation,
            buttonModificator: 'delete',
            buttonValue: currentValue
        }
    ]

    return { notationButtons, initChangeNotation, actualPlaceholder }
}