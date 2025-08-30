import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  return children;
}
