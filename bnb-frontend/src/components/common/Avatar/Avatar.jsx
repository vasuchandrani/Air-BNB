import './Avatar.css';

const Avatar = ({ src, alt, initial, size = 40, color = '#222222' }) => {
  if (src) {
    return (
      <div className="avatar" style={{ width: size, height: size }}>
        <img src={src} alt={alt || 'Avatar'} className="avatar__image" />
      </div>
    );
  }

  return (
    <div
      className="avatar avatar--initial"
      style={{ width: size, height: size, backgroundColor: color || '#222222' }}
    >
      <span className="avatar__letter" style={{ fontSize: size * 0.4 }}>
        {initial || '?'}
      </span>
    </div>
  );
};

export default Avatar;
