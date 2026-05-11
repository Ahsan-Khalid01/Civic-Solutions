function NewsSection() {
  const newsItems = [
    {
      headline: "Road work completed in G-9",
      date: "May 10, 2026",
    },
    {
      headline: "New sanitation team added in F-7",
      date: "May 8, 2026",
    },
    {
      headline: "Street lights fixed in Blue Area",
      date: "May 5, 2026",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest News</h2>

      <div className="row">
        {newsItems.map((news) => (
          <div key={news.headline} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>{news.headline}</h5>
                <p>{news.date}</p>
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;
