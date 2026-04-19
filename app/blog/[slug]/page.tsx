interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  return (
    <div>
      <h1>My Blog</h1>
      <p>id: {slug}</p>
    </div>
  );
}
