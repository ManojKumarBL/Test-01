import { useState } from 'react';
import './loginpage.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-card-wrapper">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="login-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input"
              />
            </div>
            <div>
              <label className="login-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="input"
              />
            </div>
            <button type="submit" className="btn-primary w-full mt-4">
              Sign In
            </button>
          </form>
          <p className="login-footer">
            Don’t have an account?{' '}
            <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
