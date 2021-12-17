import {ReactComponent as Chat} from '../../assets/chat.svg';
import './Button.styles.css';

const Button = () => (
    <button className='card__body--button'>
        <Chat className='card__body--button-icon'/>
        <p>Start a new Conversation </p>
    </button>
);

export default Button;