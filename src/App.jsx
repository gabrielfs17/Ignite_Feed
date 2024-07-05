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
      authorUrl:'https://instagram.ffor3-2.fna.fbcdn.net/v/t51.2885-19/414717906_907040287468457_2851506861703981290_n.jpg?_nc_ht=instagram.ffor3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fOs9VBY4XskQ7kNvgFljHYi&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBtUX6Ouv8PNWA4uzYdR_B5Wmkb6s7JkFc2lzPCh4DidQ&oe=668DD3FE&_nc_sid=8f1549',
      name: 'Thaís Rodrigues',
      role: 'Professora'
    },
    content: [
      { type: 'paragraph', content: 'Olá alunos 👋',},
      { type: 'paragraph', content: 'As notas das provas do 2º bimestre foram lançadas no portal do aluno'},
      { type: 'link', content: 'thais@gftech.dev.br'},
    ],
    publishedAt: new Date('2024-07-05 13:20:00')
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
