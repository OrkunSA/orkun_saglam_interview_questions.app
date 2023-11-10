import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const questionsDirectory = path.join(process.cwd(), 'interviewquestions');

export function getSortedQuestionsData() {
  // Get file names under /questions
  const fileNames = fs.readdirSync(questionsDirectory);
  const allQuestionsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(questionsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const question: InterviewQuestions = {
      id,
      title: matterResult.data.title,
    };

    // Combine the data with the id
    return question;
  });
  // Sort posts by date
  return allQuestionsData.sort((a, b) => (a.id < b.id ? -1 : 1));
}

export async function getQuestionData(id: string) {
  const fullPath = path.join(questionsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  //Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const questionsWithHTML: InterviewQuestions & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    contentHtml,
  };

  // Combine the data with the id
  return questionsWithHTML;
}
