// rafce
import "./index.css";
import defaultPhoto from "../../assets/img/default-photo.jpeg";

function Card(props) {
  const { image, region, rank, name, team } = props;

  const imgStyles = {
    width: "100%",
    height: "100%",
    // backgroundColor: 'red'
  };

  // conditions: || (OR) ?. (OPTIONAL CHANINING), ? : (Ternary) && (NAME?)

  return (
    <>
      <div className="container-card">
        <div className="image-trainer">
          <img src="" alt="imagen del entrenador" style={imgStyles} />
        </div>
        <div className="card-content">
          <div className="stats">
            <p className="region-tag">region1</p>
            <div className="rank">
              <p className="rank-label">rango:</p>
              <p className="rank-tag">99</p>
            </div>
          </div>

          <h2 className="title">{name}</h2>
          <div className="team">
            <h3 className="team-label">Equipo</h3>
            <div className="team-members">
              <div className="pokemon-tag">
                <p className="pokemon-tag--name">pke1</p>
                <p className="pokemon-tag--level">nivel: 99</p>
              </div>
            </div>
          </div>

          <a href="#" className="button-default">
            más información
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
