import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
        src="https://instagram.ffor3-2.fna.fbcdn.net/v/t51.2885-19/414717906_907040287468457_2851506861703981290_n.jpg?_nc_ht=instagram.ffor3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fOs9VBY4XskQ7kNvgFljHYi&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBtUX6Ouv8PNWA4uzYdR_B5Wmkb6s7JkFc2lzPCh4DidQ&oe=668DD3FE&_nc_sid=8f1549"
        />
        
        <div className={styles.profile}>
            <Avatar src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-modelo-feminino_23-2149084943.jpg?t=st=1715975536~exp=1715979136~hmac=b4ee00fb05ed136015e69ffa074327fdbf9c6f22ed520e372c4fe7ce04395fb1&w=360"/>
        
        <strong>Thaís Rodrigues</strong>
        <span>Professora</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine/>
                Perfil
            </a>
        </footer>
        </aside>
    );
}