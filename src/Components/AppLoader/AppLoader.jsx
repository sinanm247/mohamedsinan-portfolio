import './AppLoader.scss';

export default function AppLoader({ isVisible }) {
  return (
    <div
      className={`app-loader-container ${isVisible ? 'show' : 'hide'}`}
      aria-hidden={!isVisible}
    >
      <p className="app-loader__mark">MS</p>
    </div>
  );
}
