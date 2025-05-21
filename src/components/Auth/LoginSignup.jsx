import React, { useState } from 'react';
import './LoginSignup.css';
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginSignup() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [emailVerified, setEmailVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setEmailVerified(false);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (isSignUp) {
      if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
        newErrors.name = 'Name must not contain numbers or special characters';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=-])[A-Za-z\d@$!%*?&#^()_+=-]{6,}$/;

    if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        'Password must contain uppercase, lowercase, number, special character and be at least 6 characters';
    }

    if (!emailVerified) {
      newErrors.email = 'Please verify your email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`${isSignUp ? 'Account created' : 'Logged in'} successfully`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email') {
      setEmailVerified(false); // reset verification if email changes
    }
  };

  const handleEmailVerify = () => {
    // simulate verification
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setEmailVerified(true);
    } else {
      alert('Enter a valid email before verifying');
    }
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: "url('/Images/bg_11.jpg')" }}
    >
      <div className="background-overlay"></div>

      <div className={`auth-container ${isSignUp ? 'signup-mode' : ''}`}>
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>

            <div className="social-login">
              <button type="button" className="social-btn">
                <FaGoogle /> {isSignUp ? 'Sign Up' : 'Log In'} with Google
              </button>
              <button type="button" className="social-btn">
                <FaFacebookF /> {isSignUp ? 'Sign Up' : 'Log In'} with Facebook
              </button>
            </div>

            <span>or use your email</span>

            {isSignUp && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="error">{errors.name}</small>}
              </>
            )}

            {isSignUp ? (
              <>
                <div className="email-verify-input">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={`verify-btn ${emailVerified ? 'verified' : ''}`}
                    onClick={handleEmailVerify}
                  >
                    {emailVerified ? 'Verified' : 'Verify'}
                  </button>
                </div>
                {errors.email && <small className="error error-below">{errors.email}</small>}
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </>
            )}



            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <small className="error">{errors.password}</small>
            )}

            {isSignUp && (
              <>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <span
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <small className="error">{errors.confirmPassword}</small>
                )}
              </>
            )}

            {!isSignUp && (
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            )}

            <button type="submit" className="submit-btn">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>

            <p className="switch-text">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <span onClick={toggleMode}>
                {isSignUp ? ' Log In' : ' Sign Up'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
