export default function Page() {
  return (
    <main className="container">
      <h1 className="title">Dancing Dog</h1>
      <p className="subtitle">Because good boys love to groove.</p>
      <div className="stage" aria-live="polite">
        <div className="dog" aria-label="dancing dog" role="img">??</div>
        <div className="shadow" />
        <div className="notes">
          <span>?</span>
          <span>?</span>
          <span>?</span>
        </div>
      </div>
      <footer className="footer">Made with ?? and CSS</footer>
    </main>
  );
}
