import { KitchenIcon, WifiIcon, WorkspaceIcon, ParkingIcon, PoolIcon, HotTubIcon, PetsIcon, CameraIcon, AlarmIcon, SmokeIcon } from '../../../../assets/icons';
import './Amenities.css';

const ICON_MAP = { kitchen: KitchenIcon, wifi: WifiIcon, workspace: WorkspaceIcon, parking: ParkingIcon, pool: PoolIcon, hottub: HotTubIcon, pets: PetsIcon, camera: CameraIcon, alarm: AlarmIcon, smoke: SmokeIcon };

const Amenities = ({ amenities, onShowAllAmenities }) => (
  <div className="amenities">
    <h2 className="amenities__title">What this place offers</h2>
    <div className="amenities__grid">
      {amenities.displayed.map((amenity) => {
        const IconComponent = ICON_MAP[amenity.icon] || KitchenIcon;
        return (
          <div key={amenity.id} className={`amenities__item ${!amenity.available ? 'amenities__item--unavailable' : ''}`}>
            <IconComponent size={24} />
            <span className={!amenity.available ? 'amenities__strikethrough' : ''}>{amenity.name}</span>
          </div>
        );
      })}
    </div>
    <button
      type="button"
      onClick={onShowAllAmenities}
      className="amenities__show-all"
    >
      Show all {amenities.totalCount} amenities
    </button>
  </div>
);

export default Amenities;
