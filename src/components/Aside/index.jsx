import Image from 'next/image'
import Link from 'next/link'
import styles from './aside.module.css'
import logo from './logo-blog.png'

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image src={logo} alt="Logo da Code Connect" />
      </Link>
    </aside>
  )
}
