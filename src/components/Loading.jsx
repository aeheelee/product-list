function LoadingIndicator() {
  return (
    <img
      className="loading-indicator"
      alt="now loading..."
      src="../loading.gif"
      style={{
        display: 'block',
        width: '43px',
        height: '11px',
        margin: '100px auto',
      }}
    />
  );
}

export default LoadingIndicator;
