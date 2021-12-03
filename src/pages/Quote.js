const baseUrl = 'https://api.quotable.io/random';

const Quote = () => (
  <div className="content-container">
    <div className="content">
      <h1>Quote Page</h1>
      <p>Sample Quote</p>
    </div>
  </div>
);

const quotes = async () => {
  const req = await fetch(baseUrl);
  const res = await req.json();
  return res;
};

export default Quote;
export { quotes };
