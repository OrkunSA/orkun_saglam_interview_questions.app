//importing the first 2 functions from node.js to be able to read markdownfiles
import fs from 'fs';
import path from 'path';
//installed matter dependency from gray-matter for markdown files's content.
import matter from 'gray-matter';
//imported last two to generate HTML from markdownfiles.
import { remark } from 'remark';
import html from 'remark-html';

//captured current working directory into a global variable
const questionsDirectory = path.join(process.cwd(), 'interviewquestions');

//created this function to read/sort files/content in the markdown files.
export function getSortedQuestionsData() {
  // Got file names under /questions
  const fileNames = fs.readdirSync(questionsDirectory);
  //mapped over those files names
  const allQuestionsData = fileNames.map((fileName) => {
    // Removed ".md" from file name to get id and captured into a variable.
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(questionsDirectory, fileName);
    //captured the content for each markdown file has into a variable
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // passed fileContents and used with gray-matter to parse the question metadata section
    const matterResult = matter(fileContents);
    // defined question as InterviewQuestions type and passed the attributes by using matterResult object.
    const question: InterviewQuestions = {
      id,
      title: matterResult.data.title,
    };

    // Combined the data with the id
    return question;
  });
  // Sorted questions by numerical order
  return allQuestionsData.sort((a, b) => (a.id < b.id ? -1 : 1));
}

//created getQuestionData function just to get one question. It expects to receive an ID that is a string so it know what questions to get.
export async function getQuestionData(id: string) {
  // Read markdown file as string
  const fullPath = path.join(questionsDirectory, `${id}.md`);
  //captured the content for each markdown file has into a variable
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  //Used gray-matter to parse the question metadata section
  const matterResult = matter(fileContents);
  //parsed and complied markdown files by using remark. It pauses the async function until remark resolves the promise then chained with use and process.
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  //defined contetHtml and captured the prossedContent as a string
  const contentHtml = processedContent.toString();
  //defined questionsWithHTML by taking InterviewQuestions type and added on contentHtml as a string for that type
  const questionsWithHTML: InterviewQuestions & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    contentHtml,
  };

  // Combine the data with the id
  return questionsWithHTML;
}
