import styles from './CommentsCounter.module.css';

export function CommentsCounter({ comments }) {
  const checkedComments = comments.filter((comment) => comment.isChecked);
  const TOTAL_TASKS = comments.length;
  const FINISHED_TASKS = checkedComments.length;
  return (
    <header className={styles.CommentsCounter}>
      <div>
        <em className={styles.tarefaCriada}>Tarefa Criada</em>
        {' '}
        <span>{TOTAL_TASKS}</span>
      </div>
      <div>
        <em className={styles.concluidas}>Concluídas</em>
        {' '}
        <span>{`${FINISHED_TASKS} de ${TOTAL_TASKS}`}</span>
      </div>
    </header>
  );
}
