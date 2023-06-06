import { ProjectButtonProps, ShowcaseLayout } from '../../../layouts/Showcase'
import { blueTone } from '../../../styles/themes'

const projectsButtons: Array<ProjectButtonProps> = [
  {
    letter: 'c',
    url: '/project/little-blog',
    isAvailable: true
  } as ProjectButtonProps
]

export function ShowcaseReact() {
  return (
    <ShowcaseLayout
      subtitle="reactJS"
      tone={blueTone}
      rightLink="/showcase/vue"
      projects={projectsButtons}
    >
      <div>
        <h1>meus projs em react</h1>
      </div>
    </ShowcaseLayout>
  )
}
