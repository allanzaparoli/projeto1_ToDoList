import { Form } from './components/Form';
import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';
import { CommentsList } from './components/CommentsList';
import { NotCommentsList } from './components/NotCommentsList';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Form />
        <CommentsList />
        <NotCommentsList />
      </main>
    </div>
  );
}
