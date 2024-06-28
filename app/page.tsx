import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Project Page - Escape Room
      </h1>
      <p className="mb-4">
        {`I'm Jenny a student at Oregon State University. This is the blog for keeping 
        progress on the project.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
