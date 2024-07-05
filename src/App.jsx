/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
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
      authorUrl:'https://crm.gftech.dev.br/media/414717906_907040287468457_2851506861703981290_n.jpg',
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
// eslint-disable-next-line import/prefer-default-export
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
