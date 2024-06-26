//Routers
import {Header} from "./components/Header"
import {Post} from "./components/Post"
import {Sidebar} from "./components/Sidebar";

//styles
import './global.css'
import styles from './App.module.css';

const posts =[
  /*
    id:1,
    author:{
      authorUrl:'https://github.com/gabrielfs17.png',
      name: 'Gabriel Freitas',
      role: 'CTO Club Cupons'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-07-05 13:00:00')
  */
  {
    id:1,
    author:{
      authorUrl:'https://img.freepik.com/fotos-gratis/retrato-de-jovem-modelo-feminino_23-2149084943.jpg?t=st=1715975536~exp=1715979136~hmac=b4ee00fb05ed136015e69ffa074327fdbf9c6f22ed520e372c4fe7ce04395fb1&w=360',
      name: 'Thaís Rodrigues',
      role: 'Professora'
    },
    content: [
      { type: 'paragraph', content: 'Olá alunos 👋',},
      { type: 'paragraph', content: 'Minhas atividades e provas do 2º bimestre foram corrigidas'},
      { type: 'link', content: 'thaisrodeigues3055@gmail.com'},
    ],
    publishedAt: new Date('2023-07-01 13:00:00')
  }
]
export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
       {posts.map(post => {
        return (
          <Post
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}

          />
        )
       })}
        </main>
      </div>
    </div>
  )
}
