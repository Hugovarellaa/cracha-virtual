import { GetServerSideProps } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/home.module.scss";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setSetpassord] = useState("");
  const { signIn } = useContext(AuthContext);



  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="email"
        name={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name={password}
        onChange={(e) => setSetpassord(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export const getServerSideProps : GetServerSideProps = async (ctx) =>{
  console.log(ctx.req.cookies)
  return{
    props:{}
  }
}