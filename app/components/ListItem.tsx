import Link from 'next/link';

type Props = {
  question: InterviewQuestions;
};

export default function ListItem({ question }: Props) {
  const { id, title } = question;

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/questions/${id}`}
      >
        {title}
      </Link>
      <br />
    </li>
  );
}
