import { BalloonIcon, GraduationCapIcon, ShieldIcon } from '../../../../assets/icons';
import './MeetYourHost.css';

const MeetYourHost = ({ host }) => {
  if (!host) return null;

  return (
    <div className="meet-host">
      <h2 className="meet-host__title">Meet your host</h2>

      <div className="meet-host__layout">
        {/* Left Column: Host Card & Personal Info */}
        <div className="meet-host__left">
          <div className="meet-host__card">
            {/* Host Identity */}
            <div className="meet-host__profile">
              <div className="meet-host__avatar-wrapper">
                <img src={host.avatar} alt={host.name} className="meet-host__avatar-img" />
                {host.isVerified && (
                  <span className="meet-host__verified-badge" title="Identity verified">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <circle cx="12" cy="12" r="11" fill="#FF385C" />
                      <path d="M7.5 12.5l3 3 6-6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
              <h3 className="meet-host__name">{host.name}</h3>
              <p className="meet-host__role">Host</p>
            </div>

            {/* Host Quick Stats */}
            <div className="meet-host__stats">
              <div className="meet-host__stat">
                <span className="meet-host__stat-value">{host.totalReviews.toLocaleString()}</span>
                <span className="meet-host__stat-label">Reviews</span>
              </div>
              <div className="meet-host__stat-divider" />
              <div className="meet-host__stat">
                <span className="meet-host__stat-value">{host.rating}★</span>
                <span className="meet-host__stat-label">Rating</span>
              </div>
              <div className="meet-host__stat-divider" />
              <div className="meet-host__stat">
                <span className="meet-host__stat-value">{host.yearsHosting}</span>
                <span className="meet-host__stat-label">Years hosting</span>
              </div>
            </div>
          </div>

          {/* Personal Info Below Card */}
          {host.personalInfo && (
            <div className="meet-host__personal-info">
              {host.personalInfo.bornIn && (
                <div className="meet-host__info-row">
                  <BalloonIcon size={20} />
                  <span>{host.personalInfo.bornIn}</span>
                </div>
              )}
              {host.personalInfo.school && (
                <div className="meet-host__info-row">
                  <GraduationCapIcon size={20} />
                  <span>{host.personalInfo.school}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Co-Hosts, Details & Protection */}
        <div className="meet-host__right">
          {/* Co-Hosts */}
          {host.coHosts && host.coHosts.length > 0 && (
            <div className="meet-host__cohosts">
              <h3 className="meet-host__section-title">Co-Hosts</h3>
              <div className="meet-host__cohost-grid">
                {host.coHosts.map((cohost) => (
                  <div key={cohost.id} className="meet-host__cohost">
                    {cohost.avatar ? (
                      <img src={cohost.avatar} alt={cohost.name} className="meet-host__cohost-avatar" />
                    ) : (
                      <span
                        className={`meet-host__cohost-initial meet-host__cohost-initial--${cohost.initial?.toLowerCase() || 'default'}`}
                      >
                        {cohost.initial}
                      </span>
                    )}
                    <span className="meet-host__cohost-name">{cohost.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Host Details */}
          {host.hostDetails && (
            <div className="meet-host__details">
              <h3 className="meet-host__section-title">Host details</h3>
              <p className="meet-host__detail-item">Response rate: {host.hostDetails.responseRate}</p>
              <p className="meet-host__detail-item">{host.hostDetails.responseTime}</p>
            </div>
          )}

          <button type="button" className="meet-host__message-btn" onClick={(e) => e.preventDefault()}>Message host</button>

          {/* Protection Notice */}
          <div className="meet-host__protection">
            <ShieldIcon size={22} className="meet-host__protection-icon" />
            <p className="meet-host__protection-text">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetYourHost;
