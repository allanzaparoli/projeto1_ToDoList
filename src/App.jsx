import { Form } from './components/Form';
import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
}
