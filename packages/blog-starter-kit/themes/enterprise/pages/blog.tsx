import { format, parseISO } from 'date-fns';
import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AppProvider } from '../components/contexts/appContext';
import { IDEFooter } from '../components/ide-footer';
import { IDENavbar } from '../components/ide-navbar';
import { Layout } from '../components/layout';
import {
	PostFragment,
	PostsByPublicationDocument,
	PostsByPublicationQuery,
	PostsByPublicationQueryVariables,
	PublicationFragment,
} from '../generated/graphql';

type Props = {
	publication: PublicationFragment;
	posts: PostFragment[];
};

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

function formatDate(dateString: string) {
	if (!dateString) return '';
	return format(parseISO(dateString), 'LLL d, yyyy');
}

export default function BlogList({ publication, posts }: Props) {
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>Blog — Akash Pate</title>
					<meta name="description" content="Thoughts on code, tools & building things." />
				</Head>

				<IDENavbar />

				<div className="ide-container">
					<section className="blog-page">
						{/* Header */}
						<div className="blog-page__header">
							<h1 className="blog-page__title">{'/* blog */'}</h1>
							<p className="blog-page__subtitle">{'// thoughts on code, tools & building things'}</p>
						</div>

						{posts.length === 0 ? (
							<p className="blog-page__status">{'// no posts yet — check back soon'}</p>
						) : (
							<div className="blog-grid">
								{posts.map((post) => (
									<Link key={post.id} href={`/${post.slug}`} className="blog-card">
										<p className="blog-card__date">{formatDate(post.publishedAt)}</p>
										<h2 className="blog-card__title">{post.title}</h2>
										{post.brief && (
											<p className="blog-card__excerpt">{post.brief}</p>
										)}
									</Link>
								))}
							</div>
						)}
					</section>
				</div>

				<IDEFooter />
			</Layout>
		</AppProvider>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
		GQL_ENDPOINT,
		PostsByPublicationDocument,
		{
			first: 20,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return { notFound: true };
	}

	const posts = publication.posts.edges.map((edge) => edge.node);

	return {
		props: {
			publication,
			posts,
		},
		revalidate: 1,
	};
};
