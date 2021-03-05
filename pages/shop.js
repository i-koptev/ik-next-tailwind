import Head from "next/head"

export default function Card() {
    return (
        <div>
            <Head>
                <title>E-Commerce Card</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-5xl text-indigo-400 font-bold text-center pt-10">
                    Shop
                </h1>
                <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
                    <div className="text-indigo-500 flex flex-col justify-between">
                        <img
                            src="https://images.stockx.com/Nike-Epic-React-Flyknit-2-White-Pink-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985"
                            alt=""
                        />
                        <div>
                            <small className="uppercase">choose size</small>
                            <div className="flex flex-wrap md:flex-nowrap gap-1">
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition"
                                >
                                    <small>5</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition"
                                >
                                    <small>6</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition"
                                >
                                    <small>7</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition"
                                >
                                    <small>8</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition"
                                >
                                    <small>9</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition"
                                >
                                    <small>10</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition"
                                >
                                    <small>11</small>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition"
                                >
                                    <small>12</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-indigo-500">
                        <small className="uppercase">
                            women's running shoe
                        </small>
                        <h3 className="uppercase text-black text-2xl font-medium">
                            nike epic react flyknit
                        </h3>
                        <h3 className="text-2xl font-semibold mb-7">$150</h3>
                        <small className="text-black">
                            The Nike Epic React Flyknit 1 provides crazy comfort
                            that lasts as long as you can run. Its Nike React
                            foam cushioning is responsive yet lightweight,
                            durable yet soft. This attraction of opposites
                            creates a sensation that not only enhances the
                            feeling of moving forwards, but makes running feel
                            fun, too.
                        </small>
                        <div className="flex gap-0.5 mt-4">
                            <button
                                id="addToCartButton"
                                className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3"
                            >
                                add to cart
                            </button>
                            <button
                                id="likeButton"
                                className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase p-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-suit-heart-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="w-full p-6 bg-blue-100">
                        {" "}
                        <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">
                            OUR SERVICES
                        </div>{" "}
                        <div className="p-2 text-center text-lg text-gray-700">
                            We offer the best web development solutions.
                        </div>{" "}
                        <div className="flex justify-center flex-wrap p-10">
                            <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                                {" "}
                                <div className="flex items-center w-48 h-20 bg-cyan-800 p-4 text-white uppercase ">
                                    {" "}
                                    sadasda
                                    <i className="fas fa-bezier-curve fa-3x mx-auto text-white"></i>{" "}
                                </div>{" "}
                                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                                    UI Design
                                </p>{" "}
                                <p className="p-2 text-sm text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aenean ac est massa.
                                </p>{" "}
                                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                                    {" "}
                                    <i className="fas fa-chevron-right mt-2 text-orange-500"></i>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                </section>
                <footer>
                    <div className="w-full bg-blue-900">
                        <div className="flex flex-wrap text-center text-white">
                            <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
                                <div className="my-6 ml-3 text-xl font-semibold">
                                    ABOUT US
                                </div>
                                <p className="p-3 text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aenean ac est massa. Donec
                                    eget elementum sapien, tincidunt tempor
                                    nunc. Cras sodales id ipsum at convallis.
                                </p>
                                <p className="p-3 text-gray-400">
                                    Morbi tristique massa nec massa auctor, at
                                    scelerisque felis consectetur. Morbi tempus
                                    et odio sit amet feugiat. Maecenas dignissim
                                    a turpis in molestie. Fusce tincidunt
                                    vestibulum iaculis.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
                                <div className="my-6 text-xl font-semibold">
                                    CONTACT US
                                </div>
                                <p className="mt-8 text-gray-400">
                                    {" "}
                                    A108 Adam Street <br /> New York, NY 535022{" "}
                                    <br /> United States <br />{" "}
                                    <strong>Phone:</strong> +1 5589 55488 55{" "}
                                    <br /> <strong>Email:</strong>{" "}
                                    info@webcraft.com{" "}
                                </p>
                                <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
                                    <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-facebook-f fa-lg text-blue-500 -rotate-45"></i>
                                    </div>
                                    <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-twitter fa-lg text-blue-500 -rotate-45"></i>
                                    </div>
                                    <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-google-plus-g fa-lg text-blue-500 -rotate-45"></i>
                                    </div>
                                    <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
                                        <i className="fab fa-linkedin-in fa-lg text-blue-500 -rotate-45"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-5">
                                <div className="mt-6 text-xl font-semibold">
                                    SAY HELLO!
                                </div>
                                <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
                                    <div className="flex items-center mb-4">
                                        <input
                                            className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <textarea
                                            className="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button
                                            className="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold"
                                            type="button"
                                        >
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
