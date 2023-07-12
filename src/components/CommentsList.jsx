import Trash from '../assets/trash.svg';
import styles from './CommentsList.module.css';

export function CommentsList({
  content, id, deleteComment, handleCheckbox, isChecked,
}) {
  function handleDeleteComment() {
    deleteComment(id);
  }

  return (
    <div className={styles.commentlist}>
      <main className={styles.resultcommentlist}>
        <div className={styles.checklist}>
          <input
            className={styles.checkboxRound}
            onChange={(e) => handleCheckbox(e, id)}
            type="checkbox"
            id="button"
            name="selecionar"
            checked={isChecked}
          />

          <p className={isChecked ? styles.linethrough : styles.noline}>{content}</p>
        </div>

        <button onClick={handleDeleteComment} title="Deletar comentário" type="button">
          <img src={Trash} alt="lixo" />
        </button>
      </main>
    </div>
  );
}
