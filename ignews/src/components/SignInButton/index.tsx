import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isLog = false;
  return isLog ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Hugo Alves Varella
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  );
}
