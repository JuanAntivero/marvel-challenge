import "./LoadingBarStyles.css"

const LoadingBar = () => {
  return (
    <div className="loading-bar" data-testid="loading-bar">
      <div className="loading-bar_progress" />
    </div>
  )
};

export default LoadingBar;