import styles from './SideBar.module.scss'
import clsx from 'clsx'
import { ALL, Course } from '../../../screens/Courses/Courses'

type SideBarProps = {
  category: string
  courses: Course[]
  pickCategory: (name: string) => void
}

const getCategories = (courses: Course[]) => {
  const categories = courses.flatMap((course) => course.tags)
  return [ALL, ...new Set(categories)]
}
const SideBar = ({ category, courses, pickCategory }: SideBarProps) => {
  const categories = getCategories(courses)
  return (
    <div className={styles.Container}>
      {categories.map((name) => (
        <div
          key={name}
          className={clsx(styles.Item, { [styles.ActiveItem]: name === category })}
          onClick={() => {
            pickCategory(name)
          }}
        >
          {name}
        </div>
      ))}
    </div>
  )
}
export default SideBar
