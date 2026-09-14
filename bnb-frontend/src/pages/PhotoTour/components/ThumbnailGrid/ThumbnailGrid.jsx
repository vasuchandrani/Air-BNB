import './ThumbnailGrid.css';

const ThumbnailGrid = ({ categories, onThumbnailClick }) => (
  <div className="thumbnail-grid">
    {categories.map((cat) => (
      <button
        key={cat.id}
        className="thumbnail-grid__item"
        onClick={() => onThumbnailClick(cat.id)}
        type="button"
      >
        <img src={cat.thumbnail} alt={cat.name} className="thumbnail-grid__image" />
        <span className="thumbnail-grid__label">{cat.name}</span>
      </button>
    ))}
  </div>
);

export default ThumbnailGrid;
