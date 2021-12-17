import CardHeader from '../CardHeader/CardHeader.component';
import CardBody from '../CardBody/CardBody.component';
import './Card.styles.css';

const Card = () =>  {
  return (
      <div className="card">
        <CardHeader/>
        <CardBody/>
      </div>
  );
}

export default Card;
