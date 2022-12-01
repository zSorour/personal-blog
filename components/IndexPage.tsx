import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/posts/HeroPost'
import MorePosts from 'components/posts/MorePosts'
import type { Post, Settings } from 'lib/sanity.queries'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title, description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
