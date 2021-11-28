import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";
import { RichText } from "prismic-dom";
import styles from "../post.module.scss";
import { getPrismicClient } from "../../../services/prismic";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface PostsPostPreviewProps {
  posts: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}

export default function PostPreview({ posts }: PostsPostPreviewProps) {
  const [session] = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${posts.slug}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

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
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: posts.content }}
          />
          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a href="">Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID("post", String(slug), {});
  const posts = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, //24hours
  };
};
