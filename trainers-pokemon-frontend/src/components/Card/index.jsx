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
          <img src={image || defaultPhoto} alt="imagen del entrenador" style={imgStyles} />
        </div>

        <div className="card-content">
          <div className="stats">
            <p className="region-tag">{region.name}</p>
            <div className="rank">
              <p className="rank-label">Rango:</p>
              <p className="rank-tag">{rank}</p>
            </div>
          </div>
          <h2 className="title">{name}</h2>

          <div className="team">
            <h3 className="team-label">Equipo</h3>
            <div className="team-members">

              {
                team.map((element, index) => {
                  return(
                    <div className="pokemon-tag" key={index}>
                      <p className="pokemon-tag--name">{element.pokemon}</p>
                      <p className="pokemon-tag--level">{element.level}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>

          <a href="#" className="button-default">Más información</a>

        </div>
      </div>
    </>
  );
}

export default Card;
