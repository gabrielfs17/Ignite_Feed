import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/gabrielfs17.png"/>
               
        <div className={styles.commentBox}>
            <div className={styles.commentContent} >
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gabriel Freitas</strong>
                        <time title= "30 de junho as 09:00h "dateTime='23-06-30 09:00:00'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                    <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom Gabriel, Parabéns!! </p>
            </div>
            
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>

        </div>

        </div>
    
    )
}