interface RepositoryItem {
  item: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({ item }: RepositoryItem) {
  return (
    <li>
      <strong>{item.name}</strong>
      <p>{item.description}</p>
      <a href={item.html_url}>Acessar repositorio</a>
    </li>
  );
}
