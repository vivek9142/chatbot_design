import {ReactComponent as Ellipse} from '../../assets/Ellipse.svg'
import './QuestionList.styles.css';

const QuestionList = () =>  {
  const list = [
      "Can I redeem my FB before the original term?",
      "How do I pay my Credit card bill?",
      "How can I get my Account Statement?",
      "What is the tenure of Fixed Deposit?"
  ] 

  const renderedList = list.map((item,i)=> {
    const time = 11;
    return(
          <div className="card__body--contents--list-item" style={{'animationDuration':`${time+i}s`}} key={i}>
            <div className="card__body--contents--list-item--icon"></div>
            <div className="card__body--contents--list-item--text-container">
              <div className="card__body--contents--list-item--text">
              <Ellipse className='card__body--contents--list-item--icon'/>
                <p> {item}</p>
              </div>
            </div>
        </div>
  )});

  return (
    <>
    {renderedList}
    </>
  );
}

export default QuestionList;
