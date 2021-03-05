import Head from "next/head"

export default function IndexPage() {
    return (
        <div>
            <Head>
                <title>Next eith Tailwindcss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-5xl text-indigo-400 font-bold text-center pt-10">
                    Welcome to Next.js with Tailwind CSS!
                </h1>
            </main>
        </div>
    )
}
