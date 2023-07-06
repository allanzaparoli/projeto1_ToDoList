import Clipboard from '../assets/Clipboard.png';
import styles from './NotCommentsList.module.css';

export function NotCommentsList() {
  return (
    <div className={styles.notcommentlist}>
      <header>
        <div>
          <em>Tarefa Criada</em>
          {' '}
          <span>0</span>
        </div>
        <div>
          <em>Tarefa concluída</em>
          {' '}
          <span>0</span>
        </div>
      </header>
      <div className={styles.textnotcommentlist}>
        <img src={Clipboard} alt="Clipboard" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
