/**
 *
 **/

let reposMock = [
	{
		id: 1,
		name: 'test-repo',
		full_name: 'test-user/test-repo',
		description: 'Description test-repo',
		open_issues: 20
	},
	{
		id: 2,
		name: 'best-repo',
		full_name: 'test-user/best-repo',
		description: 'Description best-repo',
		open_issues: 0
	}
];

let issuesMock = [
	{
		html_url: 'https://github.com/Graalex/EArchiv/issues/11',
		id: 178806954,
		number: 11,
		title: 'Изменения в списке пользователей',
		user: {
			login: 'Graalex',
			id: 4574709,
			avatar_url: 'https://avatars.githubusercontent.com/u/4574709?v=3',
			html_url: 'https://github.com/Graalex',
			type: 'User'
		},
		labels: [
			{
				url: 'https://api.github.com/repos/Graalex/EArchiv/labels/enhancement',
				name: enhancement,
				color: '84b6eb'
			}
		],
		state: 'open',
		comments: 0,
		created_at: '2016-09-23T07:43:45Z',
		updated_at: '2016-09-23T07:43:45Z',
		closed_at: null,
		body: 'Добавить разделение пользователей по программам.'
	},
	{
		html_url: 'https://github.com/Graalex/EArchiv/issues/9',
		id: 170577800,
		number: 9,
		title: 'Поведение при редактировании или добавлении нового скана документа',
		user: {
			login: 'Graalex',
			id: 4574709,
			avatar_url: 'https://avatars.githubusercontent.com/u/4574709?v=3',
			html_url: 'https://github.com/Graalex',
			type: 'User'
		},
		labels: [
			{
				url: 'https://api.github.com/repos/Graalex/EArchiv/labels/bug',
				name: bug,
				color: 'ee0701'
			}
		],
		state: 'open',
		comments: 0,
		created_at: '2016-08-11T06:23:11Z',
		updated_at: '2016-08-11T06:23:11Z',
		closed_at: null,
		body: 'После редактировании или добавлении нового скана документа, в секции \"Исполнители\" не обновляются данные.'
	}
];

export {reposMock, issuesMock};
