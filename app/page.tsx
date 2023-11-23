import Questions from './components/Questions';

//removed unnecessary elements and added content and styling and imported Questions component
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Cafer Orkun Saglam</span>.
        </span>
      </p>
      <Questions />
    </main>
  );
}
