import "./Room.css"

const Room = () => {
  return (
    <div className="container">
      <div className="share-room">
        Share Your Room
      </div>
      <div className="rent-room">
        <div>Rent a Room</div>
      </div>
      <div className="list">
        <li>welcome</li>
        <li>safety</li>
        <li>adventure</li>
        <li>community</li>
      </div>
    </div>
  );
}

export default Room