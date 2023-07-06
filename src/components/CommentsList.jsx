import Trash from '../assets/trash.svg';
import styles from './CommentsList.module.css';

export function CommentsList({ content, id, deleteComment }) {
  function handleDeleteComment() {
    deleteComment(id);
  }

  return (
    <div className={styles.commentlist}>
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
      <main>
        <div className={styles.resultcommentlist}>
          <input type="checkbox" name="selecionar" />
          <p>{content}</p>
          <button onClick={handleDeleteComment} title="Deletar comentário" type="button">
            <img src={Trash} alt="lixo" />
          </button>
        </div>
      </main>
    </div>
  );
}
