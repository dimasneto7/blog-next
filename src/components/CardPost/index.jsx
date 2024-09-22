import { incrementThumbsUp } from '@/actions'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '../Avatar'
import { ModalComment } from '../ModalComment'
import styles from './cardpost.module.css'
import { ThumbsUpButton } from './ThumbsUpButton'

export const CardPost = ({ post }) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post)

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de título: ${post.title}`}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment />
            <p>{post.comments?.length}</p>
          </div>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  )
}
