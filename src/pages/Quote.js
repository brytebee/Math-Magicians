const baseUrl = 'https://api.quotable.io/random';

const quotes = async () => {
  const req = await fetch(baseUrl);
  const res = await req.json();
  return res;
};

quotes();

const Quote = () => {
  const outData = [
    {
      content: 'Time is the wisest counsellor of all.',
      author: 'Pericles',
    },
    {
      content: 'He who talks more is sooner exhausted.',
      author: 'Laozi',
    },
    {
      content: 'When I let go of what I am, I become what I might be.',
      author: 'Laozi',
    },
    {
      content: 'I never worry about action, but only inaction.',
      author: 'Winston Churchill',
    },
    {
      content:
        "One's friends are that part of the human race with which one can be human.",
      author: 'George Santayana',
    },
    {
      content:
        "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
      author: 'Sam Levenson',
    },
    {
      content: 'When I let go of what I am, I become what I might be.',
      author: 'Laozi',
    },
    {
      content: 'A person who never made a mistake never tried anything new.',
      author: 'Albert Einstein',
    },
    {
      content: 'The ladder of success is never crowded at the top.',
      author: 'Napoleon Hill',
    },
    {
      content: 'A friend is, as it were, a second self.',
      author: 'Cicero',
    },
    {
      content:
        'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
      author: 'Dr. Seuss',
    },
    {
      content:
        'Life is like riding a bicycle. To keep your balance you must keep moving.',
      author: 'Albert Einstein',
    },
    {
      content:
        'We can change our lives. We can do, have, and be exactly what we wish.',
      author: 'Tony Robbins',
    },
  ];

  const { content, author } = outData[Math.floor(Math.random() * 12)];
  return (
    <div className="content-container">
      <div className="content">
        <h1>Quote Page</h1>
        <p>{content}</p>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default Quote;
export { quotes };
