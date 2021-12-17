import {ReactComponent as Hand } from '../../assets/hand.svg';
import {ReactComponent as Robo} from '../../assets/robo.svg';
import './CardHeader.styles.css';

const CardHeader = () =>  {
  return (
        <div className="card__header__container">
          <div className="card__header ">
            <h1 className="card__header--h1">IRIS</h1>
          </div>
          <div className="card__header--sub">
            <div className="card__header--sub-container">
            <h2 className="card__header--h2">Hello</h2>
            <Hand className='card__header--icon'/>
            </div>
            <h3 className="card__header--h3">I'm a Virtual Assistant</h3>
            <h3 className="card__header--h3">How may I help you?</h3>
          </div>
          <Robo className='card__body__contents--icon'/>
        </div>
  );
}

export default CardHeader;
