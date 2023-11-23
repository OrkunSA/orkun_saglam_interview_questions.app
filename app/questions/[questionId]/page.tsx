import { getQuestionData, getSortedQuestionsData } from '@/lib/questions';
//imported notFound to use when there is no data availabe in the dynamic directory
import { notFound } from 'next/navigation';
//imported Link again to navigate back to home page
import Link from 'next/link';

//created this function to create ssg pages instead of ssr pages.
export function generateStaticParams() {
  const questions = getSortedQuestionsData();

  return questions.map((question) => ({
    questionId: question.id,
  }));
}
//created generateMetaData function to generate metadata
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
//created async functions and passed in params since it's a dynamic component. Parameter will come from URL
export default async function Question({
  params,
}: {
  params: { questionId: string };
}) {
  //calling getSortedQuestionsData again to retrieve questions data.
  const questions = getSortedQuestionsData();
  //captured question id from the params.
  const { questionId } = params;
  //added if statement. returned notFound if the question id doesn't exist
  if (!questions.find((question) => question.id === questionId)) {
    return notFound();
  }
  //retrieved title and contenthtml by awating getQuestionData function.
  const { title, contentHtml } = await getQuestionData(questionId);
  //returned main element with tailwind classes. Used dangerouslySetInnerHTML inside to render the html
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
