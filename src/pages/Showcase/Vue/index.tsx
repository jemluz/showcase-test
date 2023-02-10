import { ShowcaseLayout } from '../../../layouts/Showcase'
import { greenTone } from '../../../styles/themes'

export function ShowcaseVue() {
  return (
    <ShowcaseLayout
      subtitle="vueJS"
      tone={greenTone}
      leftLink="/showcase/react"
    >
      <div>
        <h1>meus projs em vue</h1>
      </div>
    </ShowcaseLayout>
  )
}
