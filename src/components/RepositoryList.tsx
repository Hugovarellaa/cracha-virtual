import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss"
import { useEffect, useState } from "react";

interface RepositoryList {
  name: string;
  description: string;
  html_url: string;
}


export function RepositoryList() {
  const [lists, setLists] = useState<RepositoryList[]>([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(response => response.json())
      .then(data => setLists(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {lists.map(list => (
          <RepositoryItem key={list.name} item={list} />
        ))}
      </ul>
    </section>
  )
}