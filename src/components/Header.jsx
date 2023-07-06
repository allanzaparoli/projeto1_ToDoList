import styles from './Header.module.css';

import logoTodo from '../assets/logo-todo.svg';
import nametodo from '../assets/name-todo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logoTodo} alt="logo" />
      <img className={styles.headerName} src={nametodo} alt="name" />
    </header>
  );
}
