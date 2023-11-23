/*Created the component for my profile picture, imported next image to render my profile pic and added syling and some attributes for the image */
import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/IMG_6358.jpg"
        width={200}
        height={200}
        alt="Orkun Saglam"
        priority={true}
      />
    </section>
  );
}
