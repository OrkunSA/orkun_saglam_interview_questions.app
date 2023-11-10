import { getQuestionData, getSortedQuestionsData } from '@/lib/questions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  const questions = getSortedQuestionsData();

  return questions.map((question) => ({
    questionId: question.id,
  }));
}
function generateMetaData({ params }: { params: { questionId: string } }) {
  const questions = getSortedQuestionsData();
  const { questionId } = params;

  const question = questions.find((question) => question.id === questionId);
  if (!question) {
    return {
      title: 'Question Not Found',
    };
  }
  return {
    title: question.title,
  };
}

export default async function Question({
  params,
}: {
  params: { questionId: string };
}) {
  const questions = getSortedQuestionsData();
  const { questionId } = params;

  if (!questions.find((question) => question.id === questionId)) {
    return notFound();
  }
  const { title, contentHtml } = await getQuestionData(questionId);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
