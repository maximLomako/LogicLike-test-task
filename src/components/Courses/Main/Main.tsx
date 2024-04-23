import styles from './Main.module.scss'
import Card from './Cards/Card'
import { ALL, Course } from '../../../screens/Courses/Courses'

type MainProps = {
  category: string
  courses: Course[]
}

const getCourses = (category: string, courses: Course[]) => {
  if (category === ALL) return courses
  return courses.filter((course) => course.tags.includes(category))
}
const Main = ({ category, courses }: MainProps) => {
  return (
    <div className={styles.Container}>
      {getCourses(category, courses).map((course) => (
        <Card key={course.id} src={course.image} color={course.bgColor} title={course.name} />
      ))}
    </div>
  )
}
export default Main
