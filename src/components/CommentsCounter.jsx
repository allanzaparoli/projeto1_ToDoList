import styles from './CommentsCounter.module.css';

export function CommentsCounter({ comments }) {
  const checkedComments = comments.filter((comment) => comment.isChecked);
  const TOTAL_TASKS = comments.length;
  const FINISHED_TASKS = checkedComments.length;
  return (
    <header className={styles.CommentsCounter}>
      <div>
        <em>Tarefa Criada</em>
        {' '}
        <span>{TOTAL_TASKS}</span>
      </div>
      <div>
        <em>Tarefas concluídas</em>
        {' '}
        <span>{`${FINISHED_TASKS} / ${TOTAL_TASKS}`}</span>
      </div>
    </header>
  );
}
