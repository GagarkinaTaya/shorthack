// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import styles from './Header.module.css';

// export const Header: React.FC = () => {
//     return (
//         <header className={styles.header}>
//             <div className={`container ${styles.headerInner}`}>
//                 <Link to="/" className={styles.logo}>
//                     Hackathon
//                 </Link>

//                 <nav className={styles.nav}>
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? `${styles.navLink} ${styles.navLinkActive}`
//                                 : styles.navLink
//                         }
//                     >
//                         Регистрация
//                     </NavLink>
//                     <NavLink
//                         to="/participants"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? `${styles.navLink} ${styles.navLinkActive}`
//                                 : styles.navLink
//                         }
//                     >
//                         Участники
//                     </NavLink>
//                 </nav>
//             </div>
//         </header>
//     );
// };
