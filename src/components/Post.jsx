/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.authorUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } if (line.type === 'link') {
            return <p><a href="mailto">{line.content}</a></p>;
          }
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        })}
      // eslint-disable-next-line linebreak-style
      </div>
      <form className={styles.commentForm}>
        <strong>Comentar</strong>

        <textarea placeholder="Deixe um comentário aqui" />
        <button type="submit">Publicar</button>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
