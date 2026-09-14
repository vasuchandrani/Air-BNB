import './Divider.css';

const Divider = ({ className = '' }) => {
  return <hr className={`divider ${className}`} />;
};

export default Divider;
