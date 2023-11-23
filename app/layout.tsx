import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';
export const metadata = {
  title: 'Orkun Saglam Questions and Answers',
  description: 'Created by Orkun Saglam',
};
//added tailwind class to the body and rendered my Navbar and MyProfilePic components and updated the metadata.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
