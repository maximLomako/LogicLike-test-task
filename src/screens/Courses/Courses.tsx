import { useEffect, useState } from 'react'
import styles from './Courses.module.scss'
import axios from 'axios'
import { urls } from '../../api/urls'
import SideBar from '../../components/Courses/SideBar/SideBar'
import Main from '../../components/Courses/Main/Main'

export type Course = {
  bgColor: string
  id: string
  image: string
  name: string
  tags: string[]
}

export const ALL = 'Все темы'

const CoursesView = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(ALL)

  const fetchData = async () => {
    try {
      const response = await axios.get(urls.courses)
      setCourses(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const pickCategory = (name: string) => {
    setCategory(name)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.Container}>
      {loading ? (
        <div>Loading!</div>
      ) : (
        <>
          <SideBar category={category} courses={courses} pickCategory={pickCategory} />
          <Main category={category} courses={courses} />
        </>
      )}
    </div>
  )
}

export default CoursesView
