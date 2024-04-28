import "./City.css"
import hilton from "../../assets/hilton.jpg";
import beach from "../../assets/beach.jpg";
import austin from "../../assets/austin.jpg"
import poconos from "../../assets/poconos.jpg"
import naples from "../../assets/naples.jpg"
import char from "../../assets/char.jpg"
const City = () => {
  return (
    <div className="popular">
      <h2>Popular Cities </h2>
      <div className="boxes">
        <div className="box">
          <img className="img" src={beach} alt="" />
          <div className="city-title"> Myrte Beach,s.c</div>
        </div>
        <div className="box">
          <img className="img" src={hilton} alt="" />
          <div className="city-title">Hilton Head,s.c</div>
        </div>
        <div className="box">
          <img src={char} className="img" alt="" />
          <div className="city-title">Charleston, s.c</div>
        </div>
        <div className="box">
          <img src={austin} alt="" />
          <div className="city-title">Austin,Tx</div>
        </div>
        <div className="box">
          <img src={poconos} alt="" />
          <div className="city-title"> Poconos,PA</div>
        </div>
        <div className="box">
          <img src={naples}  className="img"alt="" />
          <div className="city-title">Naples,FL</div>
        </div>
      </div>
    </div>
  );
}

export default City