//Routers
import {Header} from "./components/Header"
import {Post} from "./components/Post"
import {Sidebar} from "./components/Sidebar";

//styles
import './global.css'
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
        author="Gabriel Freitas" 
        content="Programação é para todos"
      />

     <Post 
        author="Thaís Rodrigues" 
        content="Eu gosto de ler"
      />
    <Post 
        author="João Bernardo" 
        content="Eu gosto de Minecraft?"
      />
        </main>
      </div>
    </div>
  )
}
