import PostPage from 'components/posts/PostPage'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}

type SlugRouteProps = {
  params: {
    slug: string
  }
}

export default async function SlugRoute(props: SlugRouteProps) {
  const params = props.params

  // Start fetching settings early, so it runs in parallel with the post query
  const settings = await getSettings()

  const data = await getPostAndMoreStories(params.slug)

  return <PostPage data={data} settings={settings} />
}
