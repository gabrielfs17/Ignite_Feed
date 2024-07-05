import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQGQI_3k5enjBw/profile-displayphoto-shrink_100_100/0/1665287556588?e=1721260800&v=beta&t=F6lnx5GivpltlYe7FxxTAqAOt5OnCs_1cUN-0SmMUkk"/>
               
        <div className={styles.commentBox}>
            <div className={styles.commentContent} >
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gabriel Freitas</strong>
                        <time title= "30 de junho as 09:00h "dateTime='23-06-30 09:00:00'>Cerca de 5 minutos atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                    <Trash size={24}/>
                    </button>
                </header>
                <p>Obrigado por avisar!! </p>
            </div>
            
            <footer>
                <button>
                    <ThumbsUp />
                    Curtidas <span>50</span>
                </button>
            </footer>

        </div>
        

        </div>

        
    
    )

    
}
