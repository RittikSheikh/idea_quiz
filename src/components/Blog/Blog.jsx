import { ArrowDownOnSquareIcon, CursorArrowRippleIcon, LinkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Blog = () => {

	return (
		<div>
			<section className="dark:bg-cyan-500 dark:text-gray-100">
				<div className="container mx-auto flex flex-col p-6">
					<h2 className="py-4 text-3xl font-bold text-center">F A Q</h2>
					<div className="divide-y divide-gray-700">
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<LinkIcon className="w-16 h-16" />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">What is the purpose of React router ?</span>
								<span className="mt-4 dark:text-gray-300">React router organize the routing system of a website. React router is mostly used for SPA websites. It helps the user to route one page to another page. React router reduce time and it is much optimized.</span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<ArrowDownOnSquareIcon className="w-16 h-16" />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">How does Context Api works ?</span>
								<span className="mt-4 dark:text-gray-300">Context Api works like a network tower provider. It sends the data to its all child components. First we have to create a context provider to have the data and sends the data with the value property in Context tag. Context Api seems like the wireless network which components are connected with it they will receive the data throw the ContextProvider. </span>
							</div>
						</div>
						<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
							<div className="flex items-center justify-center lg:col-span-1 col-span-full">
								<CursorArrowRippleIcon className="w-16 h-16" />
							</div>
							<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
								<span className="text-xl font-bold md:text-2xl">What is useHref() hook ?</span>
								<span className="mt-4 dark:text-gray-300">useRef hooks is use for collect data form the input tag. Like the Username or password something like that from the input tag.</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;