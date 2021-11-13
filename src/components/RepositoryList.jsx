import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}