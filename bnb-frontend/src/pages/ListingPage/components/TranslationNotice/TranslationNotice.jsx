import './TranslationNotice.css';
const TranslationNotice = ({ listing }) => (
  <div className="translation-notice">
    <p>{listing.translationNotice} <a href="#" className="translation-notice__link" onClick={(e) => e.preventDefault()}>Show original</a></p>
  </div>
);
export default TranslationNotice;
