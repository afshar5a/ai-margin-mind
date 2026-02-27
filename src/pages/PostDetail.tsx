import { useParams, Link } from "react-router-dom";
import { posts } from "./Writing";

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-container">
        <p className="text-muted-foreground">Post not found.</p>
        <Link to="/writing" className="text-primary text-sm hover:underline mt-4 inline-block">← Back to writing</Link>
      </div>
    );
  }

  return (
    <div>
      <article className="section-container">
        <Link to="/writing" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">← Research Notes</Link>
        <p className="text-xs font-mono text-muted-foreground mb-3">{post.date} · Research Note</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
        <div className="prose prose-sm max-w-none">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
