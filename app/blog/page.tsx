import type { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60, // время в секундах - с каким промежутком мы хотим делать запросы
    },
  });

  if (!responce.ok) throw new Error('Unable to fetch posts');

  return responce.json();
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
  description: 'Blog page',
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );

  return <h1>Blog page</h1>;
}
