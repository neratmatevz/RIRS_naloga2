import React, { useState } from 'react';
import { auth, getUserRole } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Context';

function Login({ setRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;  // Get userId from Firebase
      setUserId(uid);  // Set the userId in context

      const role = await getUserRole(userCredential.user.uid);
      setRole(role);
      console.log("Prijava uspešna kot:", role);

    
      navigate('/');
    } catch (error) {
      console.error("Napaka pri prijavi:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Prijava</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Prijava</button>
      </form>
      <p className="mt-3">
        Še nimate računa? <Link to="/register">Registrirajte se tukaj</Link>
      </p>
    </div>
  );
}

export default Login;
