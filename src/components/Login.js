// // Login.js
// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');

//   const handleLoginClick = () => {
//     if (username.trim() !== '') {
//       onLogin(username);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       <input
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleLoginClick}>Login</button>
//     </div>
//   );
// };

// export default Login;
