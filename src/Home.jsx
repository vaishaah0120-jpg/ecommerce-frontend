function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="card-badge">Fresh picks • curated daily</p>
        <h1 className="hero-title">Discover the best food, products, and experiences in one place.</h1>
        <p className="hero-subtitle">
          Browse trending restaurants, explore quality products, and create your account in seconds.
        </p>
        <div className="hero-actions">
          <button className="primary-btn">Sign up for free</button>
          <a className="secondary-btn" href="/products">Explore products</a>
        </div>
      </div>

      <div className="hero-card">
        <img src="https://zerodha.com/static/images/landing.svg" alt="dashboard preview" />
      </div>
    </section>
  )
}

export default Home