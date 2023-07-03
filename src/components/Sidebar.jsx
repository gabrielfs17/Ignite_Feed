import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
        />
        
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/gabrielfs17.png"/>
        
        <strong>Gabriel Freitas</strong>
        <span>Desenvolvedor FullStack</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine/>
                Editar conta
            </a>
        </footer>
        </aside>
    );
}