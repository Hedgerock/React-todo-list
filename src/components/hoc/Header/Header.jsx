import './Header.css';

export const Header = ({ children }) => {

    return (
        <div className='header'>
            { children }
        </div>
    )
}