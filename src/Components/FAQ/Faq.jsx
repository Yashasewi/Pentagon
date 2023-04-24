// import { useRef, useState } from "react";

// const FaqsCard = (props) => {
//     const answerElRef = useRef();
//     const [state, setState] = useState(false);
//     const [answerH, setAnswerH] = useState("0px");
//     const { faqsList, idx } = props;

//     const handleOpenAnswer = () => {
//         const answerElH = answerElRef.current.childNodes[0].offsetHeight;
//         setState(!state);
//         setAnswerH(`${answerElH + 20}px`);
//     };

//     return (
//         <div
//             className="space-y-3 mt-5 overflow-hidden border-b"
//             key={idx}
//             onClick={handleOpenAnswer}
//         >
//             <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
//                 {faqsList.q}
//                 {state ? (
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500 ml-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M20 12H4"
//                         />
//                     </svg>
//                 ) : (
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500 ml-2"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 4v16m8-8H4"
//                         />
//                     </svg>
//                 )}
//             </h4>
//             <div
//                 ref={answerElRef}
//                 className="duration-300"
//                 style={state ? { height: answerH } : { height: "0px" }}
//             >
//                 <div>
//                     <p className="text-gray-500">{faqsList.a}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default () => {
//     const faqsList = [
//         {
//             q: "What are some random questions to ask?",
//             a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
//         },
//         {
//             q: "Do you include common questions?",
//             a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
//         },
//         {
//             q: "Can I use this for 21 questions?",
//             a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
//         },
//         {
//             q: "Are these questions for girls or for boys?",
//             a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
//         },
//         {
//             q: "What do you wish you had more talent doing?",
//             a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
//         },
//     ];

//     return (
//         <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
//             <div className="space-y-3 text-center">
//                 <h1 className="text-3xl text-gray-800 font-semibold">
//                     Frequently Asked Questions
//                 </h1>
//                 <p className="text-gray-600 max-w-lg mx-auto text-lg">
//                     Answered all frequently asked questions, Still confused?
//                     feel free to contact us.
//                 </p>
//             </div>
//             <div className="mt-14 max-w-2xl mx-auto">
//                 {faqsList.map((item, idx) => (
//                     <FaqsCard idx={idx} faqsList={item} />
//                 ))}
//             </div>
//         </section>
//     );
// };

export default () => {
    const faqsList = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
            href: "http ",
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
            href: "https://twitter.com/",
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
            href: "https://twitter.com/",
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
            href: "https://twitter.com/",
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
            href: "https://twitter.com/",
        },
    ];

    return (
        <section className="py-14">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="space-y-5 sm:mx-auto sm:max-w-md sm:text-center">
                    <h3 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                        How can we help?
                    </h3>
                    <p className="text-gray-600">
                        Everything you need to know about the product. Can’t
                        find the answer you’re looking for? feel free to{" "}
                        <a
                            className="whitespace-nowrap font-semibold text-indigo-600"
                            href="https://twitter.com/"
                        >
                            contact us
                        </a>
                        .
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mx-auto sm:max-w-xs"
                    >
                        <div className="relative">
                            <svg
                                className="absolute inset-y-0 left-3 my-auto h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                            />
                        </div>
                    </form>
                </div>
                <div className="mt-12">
                    <ul className="grid-cols-2 gap-12 space-y-8 sm:grid sm:space-y-0 lg:grid-cols-3">
                        {faqsList.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <summary className="flex items-center justify-between font-semibold text-gray-700">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className="leading-relaxed text-gray-600"
                                ></p>
                                <a
                                    href={item.href}
                                    className="flex items-center gap-x-1 text-sm font-medium text-indigo-600 duration-150 hover:text-indigo-400"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
