import { useState} from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button style={{width: '100px', height: '50px'}} onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
