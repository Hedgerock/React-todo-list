import { ButtonIcon } from "../../../../../../ButtonIcon";
import { useTodoItemChildContext } from "../../../hooks";
import { FilteredNotationsList } from "./hoc";
import { NotationsElementButton, NotationElement } from "./NotationsElement";

import './Notations.css';
import { useGetFilteredNotations } from "./hooks/useGetFilteredNotations";

export const Notations = () => {
    const { buttonIcons, changeStatus } = useTodoItemChildContext();
    const { create } = buttonIcons;
    const { filteredNotation, actualText, switchHandler } = useGetFilteredNotations();

    const notationClassName = `notations ${ changeStatus ? 'notations_editable' : '' }`
    
    return (
        <div className={ notationClassName }>
            { changeStatus && 
                <NotationsElementButton 
                    func = { switchHandler } 
                    modificatior = { 'create' } 
                    title = { actualText }
                >
                    <ButtonIcon value = { create }/>
                </NotationsElementButton>
            }
            { filteredNotation.length > 0 &&
                <FilteredNotationsList 
                    data = { filteredNotation }
                    isChangable = { true }
                >
                    <NotationElement />
                </FilteredNotationsList>
            }
        </div>
    )
}