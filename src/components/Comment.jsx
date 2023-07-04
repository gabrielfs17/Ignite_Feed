import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
               
        <div className={styles.commentBox}>
            <div className={styles.commentContent} >
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title= "30 de junho as 09:00h "dateTime='23-06-30 09:00:00'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                    <Trash size={24}/>
                    </button>
                </header>
                <p>Muito bom Gabriel, Parabéns!! </p>
            </div>
            
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>25</span>
                </button>
            </footer>

        </div>

        </div>
    
    )
}