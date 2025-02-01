import "./Card.css";

function Card(props) {
  return (
    <div class="card">
      <img src="#" />
      <div class="card-content">
        <div class="card-title">Card Title</div>
        <div class="card-description">
          {props.prp}
        </div>
        <a href="#" class="card-btn">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
