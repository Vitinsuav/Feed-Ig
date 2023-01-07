import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://media.istockphoto.com/id/1220974008/pt/foto/website-design-developing-programming-and-coding-technologies.jpg?b=1&s=612x612&w=0&k=20&c=TxJrBeQdREt36PB6nkiY1p4hzin3D6MzmFfaKpuVw9M="/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://www.lance.com.br/files/article_main/uploads/2018/11/15/5bedcf90501e4.jpeg"></img>
                
                <strong>Vitor Silva</strong>
                <spam>Web Developer</spam>
                <footer> 
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}