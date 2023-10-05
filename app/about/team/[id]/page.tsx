import { Metadata } from 'next';

// опишем параметры как отдельный тип
type Props = {
  params: {
    id: string; // id - так как мі так создали папку
  };
};

// функция будет возращать промис с метаданными
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export default function Post({ params: { id } }: Props) {
  return <h1>Team {id} genereted</h1>;
}
