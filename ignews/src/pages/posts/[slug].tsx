import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { RichText } from "prismic-dom";
import styles from "./post.module.scss";
import { getPrismicClient } from "../../services/prismic";

interface PostsProps {
  posts: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}

export default function Post({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>{posts.title} | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{posts.title}</h1>
          <time>{posts.updateAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: posts.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("post", String(slug), {});
  const posts = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };
  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${posts.slug}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
    },
  };
};
