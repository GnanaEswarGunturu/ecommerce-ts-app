import { useState } from 'react';
import data from './data';
import Card from './Card';
import './styles/styles.css';

function App() {
  const [val, setVal] = useState('');
  const [sort, setSort] = useState('default');
  const [page, setPage] = useState(1);
  
  let list = data.filter((x: any) => x.title.toLowerCase().includes(val.toLowerCase()));

  if (sort === 'low-high') {
    // changing string to num
    list.sort((a: any, b: any) => a.newPrice - b.newPrice);
  }
  if (sort === 'high-low') {
    list.sort((a: any, b: any) => b.newPrice - a.newPrice);
  }

  let perPage = 6;
  let max = Math.ceil(list.length / perPage);
  if (page > max) setPage(max);
  if (page < 1) setPage(1);

  let temp = list.slice((page - 1) * perPage, (page - 1) * perPage + perPage);

  return (
    <div className="app-container">
      <h1>Simple E-Commerce Store</h1>
      
      <div className="controls">
        <input 
          type="text" 
          placeholder="Search items..." 
          className="search-input"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            setPage(1);
          }}
        />

        <select className="sort-select" value={sort} onChange={(e) => {
          setSort(e.target.value);
          setPage(1);
        }}>
          <option value="default">Sort by price</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>

      {temp.length > 0 ? (
        <div className="product-grid">
          {temp.map((item: any, i: any) => (
            <Card key={i} item={item} />
          ))}
        </div>
      ) : (
        <p>No products found!</p>
      )}

      {max > 1 && (
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
          <span>Page {page} of {max}</span>
          <button onClick={() => setPage(page + 1)} disabled={page === max}>Next</button>
        </div>
      )}
    </div>
  );
}

export default App;
