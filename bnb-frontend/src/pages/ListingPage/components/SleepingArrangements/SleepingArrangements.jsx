import './SleepingArrangements.css';

const SleepingArrangements = ({ listing }) => (
  <div className="sleeping">
    <h2 className="sleeping__title">Where you'll sleep</h2>
    <div className="sleeping__cards">
      {listing.sleepingArrangements.map((room, index) => (
        <div key={index} className="sleeping__card">
          <img src={`/images/${room.image}`} alt={room.name} className="sleeping__image" />
          <h3 className="sleeping__name">{room.name}</h3>
          <p className="sleeping__details">{room.details}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SleepingArrangements;
