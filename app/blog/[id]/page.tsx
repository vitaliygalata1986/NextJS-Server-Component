//'use client';
import { Metadata } from 'next';

// функция получения данных по id
async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60, // время в секундах - с каким промежутком мы хотим делать запросы
      },
    }
  );
  return response.json();
}

// опишем параметры как отдельный тип
type Props = {
  params: {
    id: string; // id - так как мы так создали папку
  };
};

// асинхронная функция будет возращать промис с метаданными
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
