import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.Comment}>
            <img className={styles.avatar} src="https://github.com/gabrielfs17.png"/>
    
        <div className={styles.CommentBox}>
            <div className={styles.CommentContent} >
                <header>
                    <div></div>
                </header>
                <p>Muito bom Gabriel, Parabéns!! </p>
            </div>

            <footer>
                Aplaudir
            </footer>

        </div>

        </div>
    
    )
}