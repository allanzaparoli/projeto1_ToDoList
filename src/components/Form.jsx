import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';
import { CommentsList } from './CommentsList';

export function Form() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const lastid = comments[comments.length - 1]?.id ?? 0;
      setComments([...comments, { id: lastid + 1, content: newCommentText }]);
      setNewCommentText('');
    } catch (error) {
      alert('Erro ao criar nota');
    }
  };

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Digite pelo menos 1 caractere');
  }

  const deleteComment = (commentToDelete) => {
    try {
      const commentsWithoutDeleted = comments.filter((comment) => comment.id !== commentToDelete);
      setComments(commentsWithoutDeleted);
    } catch (error) {
      alert('Erro ao deletar nota');
    }
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          name="Lista de tarefas"
          placeholder="Adicionar uma nova tarefa"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Criar</button>
        </footer>
      </form>
      <div>
        {comments.map((comment, index) => (
          <CommentsList
            key={uuidv4}
            id={comment.id}
            index={index}
            content={comment.content}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
