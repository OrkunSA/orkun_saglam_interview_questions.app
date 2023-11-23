//imported Link from Next for navigation between each question.
import Link from 'next/link';

//created typescript functional component for React.Passed InterviewQuestions type to use the props in my ListItem function
type Props = {
  question: InterviewQuestions;
};
//passed in question as a prop to retrieve the value of id, title.
export default function ListItem({ question }: Props) {
  const { id, title } = question;

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        //linked each question to a dynamic id.
        href={`/questions/${id}`}
      >
        {title}
      </Link>
      <br />
    </li>
  );
}
