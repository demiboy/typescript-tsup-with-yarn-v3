module.exports = {
	questions: [
		{
			name: 'description',
			message: "What's the description of your project?",
			type: 'text',
			initial: 'No description provided.',
		},
		{
			name: 'author',
			type: 'text',
			message: "What's the author of your project?",
			initial: 'No author provided.',
		},
		{
			name: 'repository',
			type: 'text',
			message: "What's the repository of your project?",
			initial: 'No repository provided.',
		},
	],
};

