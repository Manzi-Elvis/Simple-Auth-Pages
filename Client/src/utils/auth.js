export const saveAuth = (obj) => localStorage.setItem('auth',
JSON.stringify(obj));
export const loadAuth = () => JSON.parse(localStorage.getItem('auth') ||
'null');
export const clearAuth = () => localStorage.removeItem('auth');
