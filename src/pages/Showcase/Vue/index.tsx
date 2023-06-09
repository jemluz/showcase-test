import { ProjectButtonProps, ShowcaseLayout } from '../../../layouts/Showcase'
import { greenTone } from '../../../styles/themes'

const projectsButtons: Array<ProjectButtonProps> = [
  {
    letter: '1',
    url: '/project/little-blog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '2',
    url: '/project/todo-list',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '3',
    url: '/project/ignite-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '4',
    url: '/project/little-bdffsdfog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '5',
    url: '/project/todasdasd',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '6',
    url: '/project/iasdade-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '7',
    url: '/project/littlsdfsdg',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '8',
    url: '/project/tdfdfist',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '9',
    url: '/project/tasdasdst',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '10',
    url: '/projectasadasdlist',
    isAvailable: true
  } as ProjectButtonProps,
]

export function ShowcaseVue() {
  return (
    <ShowcaseLayout
      subtitle="vueJS"
      tone={greenTone}
      leftLink="/showcase/react"
      projects={projectsButtons}
    />
  )
}
