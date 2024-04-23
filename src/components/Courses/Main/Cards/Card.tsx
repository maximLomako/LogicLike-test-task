import styles from './Card.module.scss'

type CardProps = {
  src: string
  color: string
  title: string
}
const Card = ({ src, color, title }: CardProps) => {
  return (
    <div className={styles.Container}>
      <div style={{ backgroundColor: color }} className={styles.ImageWrapper}>
        <img className={styles.Image} src={src} alt='card' />
      </div>
      <div className={styles.Title}>{title}</div>
    </div>
  )
}
export default Card
