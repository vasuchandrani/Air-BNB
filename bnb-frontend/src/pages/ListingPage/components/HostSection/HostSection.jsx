import Avatar from '../../../../components/common/Avatar/Avatar';
import './HostSection.css';

const HostSection = ({ host }) => (
  <div className="host-section">
    <Avatar src={host.avatar} alt={host.name} size={48} />
    <div className="host-section__info">
      <h3 className="host-section__name">Hosted by {host.name}</h3>
      <p className="host-section__duration">{host.yearsHosting} years hosting</p>
    </div>
  </div>
);

export default HostSection;
