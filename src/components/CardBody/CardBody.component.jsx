import {ReactComponent as Ques} from '../../assets/ques.svg';
import QuestionList from '../QuestionList/QuestionList.component';
import Button from '../Button/Button.component';
import './CardBody.styles.css';

const CardBody = () =>  {
  return (
    <div className="card__body animation">
    <div className="card__body__contents--container">
        
      <div className="card__body__contents">
        <div className="card__body__contents--header-container">
          <h5 className="card__body__contents--header">
            Frequently Asked Questions 
          </h5>
          <Ques className='card__body__contents--headericon'/>
        </div>

        <div className="card__body--contents--list">
            <QuestionList/>
        </div>

        <div className="card__body--contents--button-container">
            <Button/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CardBody;
