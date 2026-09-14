import { OutdoorIcon, CoolIcon, SelfCheckInIcon } from '../../../../assets/icons';
import './Highlights.css';

const ICON_MAP = { outdoor: OutdoorIcon, cool: CoolIcon, checkin: SelfCheckInIcon };

const Highlights = ({ listing }) => (
  <div className="highlights">
    {listing.highlights.map((highlight, index) => {
      const IconComponent = ICON_MAP[highlight.icon] || OutdoorIcon;
      return (
        <div key={index} className="highlights__item">
          <div className="highlights__icon"><IconComponent size={24} /></div>
          <div className="highlights__content">
            <h3 className="highlights__title">{highlight.title}</h3>
            <p className="highlights__description">{highlight.description}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default Highlights;
