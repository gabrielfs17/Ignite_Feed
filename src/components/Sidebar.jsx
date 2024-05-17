import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
        />
        
        <div className={styles.profile}>
            <Avatar src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-modelo-feminino_23-2149084943.jpg?t=st=1715975536~exp=1715979136~hmac=b4ee00fb05ed136015e69ffa074327fdbf9c6f22ed520e372c4fe7ce04395fb1&w=360"/>
        
        <strong>Thaís Rodrigues</strong>
        <span>Professora</span>
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