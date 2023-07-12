import { useState } from 'react';
import styles from './Form.module.css';
import { CommentsList } from './CommentsList';
import { NotCommentsList } from './NotCommentsList';
import { CommentsCounter } from './CommentsCounter';
import plusButton from '../assets/plus-button.svg';

export function Form() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const lastId = comments[comments.length - 1]?.id ?? 0;
      setComments([...comments, { id: lastId + 1, content: newCommentText, isChecked: false }]);
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

  const handleCheckbox = (e, id) => {
    const isTrue = e.target.checked;
    const findComment = comments.find((comment) => comment.id === id);
    const index = comments.indexOf(findComment);
    const newComments = [...comments];
    newComments[index].isChecked = isTrue;
    setComments(newComments);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="Lista de tarefas"
          placeholder="Adicionar uma nova tarefa"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Criar
            {' '}
            <img src={plusButton} alt="imagem" />
          </button>
        </footer>
      </form>
      <div>
        <CommentsCounter comments={comments} />
        {
          comments.length > 0
            ? comments.map((comment, index) => (
              <CommentsList
                key={comment.id}
                id={comment.id}
                index={index}
                content={comment.content}
                isChecked={comment.isChecked}
                deleteComment={deleteComment}
                handleCheckbox={handleCheckbox}
              />
            ))
            : <NotCommentsList />
        }
      </div>
    </article>
  );
}
