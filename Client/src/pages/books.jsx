import React, { useEffect, useState } from 'react';
import api from '../api';
import { loadAuth } from '../utils/auth';
export default function Books(){
const [books, setBooks] = useState([]);
const [page, setPage] = useState(1);
const [pages, setPages] = useState(1);
const [search, setSearch] = useState('');
const auth = loadAuth();
const fetchBooks = async () => {
try {
const data = await api.request(`/books?page=${page}&limit=8&search=$
{encodeURIComponent(search)}`, { token: auth?.token });
setBooks(data.data);
setPages(data.pages);
} catch (err) { console.error(err); }
};
useEffect(() => { fetchBooks(); }, [page, search]);
return (
<div>
<input placeholder="Search" value={search} onChange={e => {
setSearch(e.target.value); setPage(1); }} />
<div className="grid">
{books.map(b => <div key={b._id}>{b.title} — {b.author}</div>)}
</div>
<div>
<button onClick={() => setPage(p => Math.max(1, p-1))}>Prev</button>
<span>{page} / {pages}</span>
<button onClick={() => setPage(p => Math.min(p+1, pages))}>Next</button>
</div>
</div>
);
}
