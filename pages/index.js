import Head from "next/head"
import Link from "next/link"

export default function IndexPage() {
    return (
        <div>
            <Head>
                <title>Next with Tailwindcss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <div class="flex justify-between items-center py-4 bg-blue-900">
                    {" "}
                    <div class="flex-shrink-0 ml-10 cursor-pointer">
                        {" "}
                        <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>{" "}
                        <span class="ml-1 text-3xl text-blue-200 font-semibold">
                            IK Next-Tailwind
                        </span>{" "}
                    </div>{" "}
                    <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>{" "}
                    <ul class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
                        {" "}
                        <li class="mr-6 p-1 border-b-2 border-pink-600">
                            {" "}
                            <a class="text-blue-200 cursor-default" href="#">
                                Home
                            </a>{" "}
                        </li>{" "}
                        <li class="mr-6 p-1 transition-colors duration-500 ease-in-out border-b-2 border-blue-900 hover:border-blue-500">
                            {" "}
                            <a
                                class="text-white hover:text-blue-300 transition-colors duration-500 ease-in-out "
                                href="#"
                            >
                                Services
                            </a>{" "}
                        </li>{" "}
                        <li class="mr-6 p-1">
                            <Link href="/shop">
                                <a
                                    class="text-white hover:text-blue-300"
                                    href="#"
                                >
                                    Shop
                                </a>
                            </Link>
                        </li>{" "}
                        <li class="mr-6 p-1">
                            {" "}
                            <a class="text-white hover:text-blue-300" href="#">
                                Team
                            </a>{" "}
                        </li>{" "}
                        <li class="mr-6 p-1">
                            {" "}
                            <a class="text-white hover:text-blue-300" href="#">
                                About
                            </a>{" "}
                        </li>{" "}
                        <li class="mr-6 p-1">
                            {" "}
                            <a class="text-white hover:text-blue-300" href="#">
                                Contacts
                            </a>{" "}
                        </li>{" "}
                    </ul>{" "}
                </div>
            </nav>

            <main>
                <h1 className="text-5xl text-indigo-400 font-bold text-center pt-10">
                    Welcome to Next.js with Tailwind!
                </h1>
            </main>
        </div>
    )
}
