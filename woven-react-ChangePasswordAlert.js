// // AlertCard.jsx
// import React from "react";

// export default function AlertCard({ auth }) {
//   const accs = auth.meta.breachedAccounts;
//   const [isAlert, setIsAlert] = React.useState(
//     !auth.meta.suggestPasswordChange
//   );
//   return (
//     <div className="card">
//       {isAlert ? (
//         <p style={{ background: "white" }}>No alerts</p>
//       ) : (
//         <div>
//           <h1 className="card-header" style={{ background: "GoldenRod" }}>
//             Alert!
//           </h1>
//           <div className="card-body" style={{ background: "gold" }}>
//             <p>Your email was involved in a breach on the following sites:</p>
//             <ul>
//               {accs.map((acc) => (
//                 <li key={acc.name}>
//                   {acc.addedDate} - {acc.name}
//                 </li>
//               ))}
//             </ul>
//             <p>
//               Although your information on our site is safe, we recommend you
//               change your password in case your AppCo account shares a password
//               with any of the sites above.
//             </p>

//             <button>Change Password</button>
//             <button onClick={() => setIsAlert(true)}>Dismiss</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Dashboard.jsx
// import React from "react";
// import TasksCard from "./cards/TasksCard";
// import AlertCard from "./cards/AlertCard";

// export default function Dashboard({ auth }) {
//   return (
//     <div>
//       <h2 className="mt-3">Dashboard</h2>
//       <div className="row mt-5">
//         <div className="col-12">
//           <AlertCard auth={auth} />
//           <TasksCard />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

export default function App() {
  const [auth, setAuth] = useState({
    token: "",
    user: {},
    meta: {},
  });

  const onLoginSuccess = (auth) => {
    setAuth(auth);
    console.log(auth);
  };

  const onLogOut = (e) => {
    setAuth({
      token: "",
      user: {},
      meta: {},
    });
  };

  const currentPage = () => {
    return auth.token ? (
      <Dashboard auth={auth} />
    ) : (
      <LoginForm onLoginSuccess={onLoginSuccess} />
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a className="navbar-brand mr-auto" href="#">
          AppCo
        </a>

        {auth.token && (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={onLogOut}>
                Log out
              </a>
            </li>
          </ul>
        )}
      </nav>
      <div className="container">{currentPage()}</div>
    </div>
  );
}
