```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    if (req.method === 'GET') {
      res.status(200).json({ data: 'This is some data' });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }, 5000); // Simulate a 5-second delay
}
```
```javascript
// components/MyComponent.jsx
import useSWR from 'swr';

function MyComponent() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <p>{data.data}</p>
    </div>
  );
}

export default MyComponent;
```