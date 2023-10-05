// опишем параметры как отдельный тип
type Props = {
  params: {
    id: string; // id - так как мы так создали папку
  };
};

export default function EditPost({ params: { id } }: Props) {
  return <h1>EditPost {id}</h1>;
}
