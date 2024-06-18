import Image from "next/image";
//create a tab bar for the home page

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
            <ul className="flex flex-row">
                <li className="mr-6">
                    <a className="hover:underline" href="#">Home</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">About</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Contact</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Blog</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Portfolio</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Resume</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Blog</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Blog</a>
                </li>
                <li className="mr-6">
                    <a className="hover:underline" href="#">Blog</a>
                </li>
            </ul>
            {/* display image below */}
            <div className="mt-6 flex flex-row">
              
            </div>
        </div>

    </main>
  );
}
