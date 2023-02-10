import { ShowcaseLayout } from '../../../layouts/Showcase'
import { blueTone } from '../../../styles/themes'

export function ShowcaseReact() {
  return (
    <ShowcaseLayout
      subtitle="reactJS"
      tone={blueTone}
      rightLink="/showcase/vue"
    >
      <div>
        <h1>meus projs em react</h1>
      </div>
    </ShowcaseLayout>
  )
}
