import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArctiveLink } from "../ArctiveLink/ActiveLink"

export function Header() {
  const { asPath } = useRouter();

  console.log(asPath)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <a>
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </Link>
        <nav>
          <ArctiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ArctiveLink>
          <ArctiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a> 
          </ArctiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
