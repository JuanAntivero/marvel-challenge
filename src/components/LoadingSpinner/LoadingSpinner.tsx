import "./LoadingSpinnerStyles.css"

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner_container" data-testid="loading-spinner">
      <div className="loading-spinner"></div>
    </div>
  )
};

export default LoadingSpinner;