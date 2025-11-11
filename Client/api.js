const API = process.env.REACT_APP_API || 'http://localhost:5000/api';
async function request(path, { method='GET', body=null, token=null } = {}){
const headers = { 'Content-Type': 'application/json' };
if (token) headers['Authorization'] = `Bearer ${token}`;
const res = await fetch(`${API}${path}`, {
method,
headers,
body: body ? JSON.stringify(body) : null
});
const data = await res.json();
if (!res.ok) throw data;
return data;
}
export default { request };