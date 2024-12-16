```javascript
// components/MyComponent.jsx
import useSWR from 'swr';

function MyComponent() {
  const { data, error, isValidating } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load: {error.message}</div>;
  if (isValidating) return <div>loading...</div>;
  if (!data) return <div>no data</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <p>{data.data}</p>
    </div>
  );
}

const fetcher = async (url) => {
  const res = await fetch(url);
  
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json(); // Include error details from the API
    throw error;
  }
  return res.json();
}

export default MyComponent;
```
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