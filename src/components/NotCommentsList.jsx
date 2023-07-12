import Clipboard from '../assets/Clipboard.png';
import styles from './NotCommentsList.module.css';

export function NotCommentsList() {
  return (
    <div className={styles.notcommentlist}>
      <div className={styles.textnotcommentlist}>
        <img src={Clipboard} alt="Clipboard" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
