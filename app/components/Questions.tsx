//imported getSortedQuestionsData function created in lib directory
import { getSortedQuestionsData } from '@/lib/questions';
import ListItem from './ListItem';

export default function Questions() {
  //called getSortedQuestionsData function and captured the data into a variable.
  const questions = getSortedQuestionsData();
  // added section element and some styling and returned each question as unordered lists by mapping over questions.
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Questions</h2>
      <ul className="w-full">
        {questions.map((question) => (
          //Added ListItem component here to render each question on my page.tsx file.
          <ListItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}
