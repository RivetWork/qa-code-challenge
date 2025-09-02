export default function RouteError() {
  return (
    <div role="alert" style={{ padding: 16 }}>
      <h2>Something went wrong</h2>
      <p>Try navigating back to the home page.</p>
      <a href="/">Go home</a>
    </div>
  );
}
