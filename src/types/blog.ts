export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
  publishedAt: string;
}

export interface RotatingBlogSection {
  id: string;
  title: string;
  subtitle: string;
  posts: BlogPost[];
}
