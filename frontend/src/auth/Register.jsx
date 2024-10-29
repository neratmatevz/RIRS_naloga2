import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Shrani uporabnikovo vlogo v Firestore kot "employee"
      await setDoc(doc(db, "users", userId), {
        role: "employee",
        email: email
      });

      console.log("Registracija uspešna!");

      // Preusmeri na osnovno stran
      navigate('/');
    } catch (error) {
      console.error("Napaka pri registraciji:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registracija</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registracija</button>
      </form>
      <p className="mt-3">
        Imate že račun? <Link to="/login">Prijavite se tukaj</Link>
      </p>
    </div>
  );
}

export default Register;
