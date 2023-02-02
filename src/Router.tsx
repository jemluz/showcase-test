import { Routes, Route } from 'react-router-dom'
import { ProjectLayout } from './layouts/Project'
import { ShowcaseLayout } from './layouts/Showcase'
import { LittleBlog } from './pages/Project/LittleBlog'
import { TodoList } from './pages/Project/TodoList'
import { ShowcaseReact } from './pages/Showcase/React'
import { ShowcaseVue } from './pages/Showcase/Vue'
import { TimeLine } from './pages/TimeLine'

export function Router() {
  return (
    <Routes>
      <Route path='timeline' element={<TimeLine />} />
      <Route path='showcase' element={<ShowcaseLayout />} >
        <Route path='react' element={<ShowcaseReact />} />
        <Route path='vue' element={<ShowcaseVue />} />
      </Route>
      <Route path='project' element={<ProjectLayout />} >
        <Route path='todo-list' element={<TodoList />} />
        <Route path='little-blog' element={<LittleBlog />} />
      </Route>
    </Routes>
  )
}
