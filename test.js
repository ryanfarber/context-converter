var ContextBuilder = require('./index.js');


var githubData = {
  ref: 'refs/heads/master',
  before: 'b14f1bc2143f0a1642d5d3d267eb342b9cb2ba0e',
  after: '6c582f7b47aaad3408f1c1441ed88bc225278b74',
  repository: {
    id: 287464900,
    node_id: 'MDEwOlJlcG9zaXRvcnkyODc0NjQ5MDA=',
    name: 'metatech-website',
    full_name: 'metatech-industries/metatech-website',
    private: true,
    owner: {
      name: 'metatech-industries',
      email: '68498584+metatech-industries@users.noreply.github.com',
      login: 'metatech-industries',
      id: 68498584,
      node_id: 'MDQ6VXNlcjY4NDk4NTg0',
      avatar_url: 'https://avatars3.githubusercontent.com/u/68498584?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/metatech-industries',
      html_url: 'https://github.com/metatech-industries',
      followers_url: 'https://api.github.com/users/metatech-industries/followers',
      following_url: 'https://api.github.com/users/metatech-industries/following{/other_user}',
      gists_url: 'https://api.github.com/users/metatech-industries/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/metatech-industries/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/metatech-industries/subscriptions',
      organizations_url: 'https://api.github.com/users/metatech-industries/orgs',
      repos_url: 'https://api.github.com/users/metatech-industries/repos',
      events_url: 'https://api.github.com/users/metatech-industries/events{/privacy}',
      received_events_url: 'https://api.github.com/users/metatech-industries/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/metatech-industries/metatech-website',
    description: null,
    fork: false,
    url: 'https://github.com/metatech-industries/metatech-website',
    forks_url: 'https://api.github.com/repos/metatech-industries/metatech-website/forks',
    keys_url: 'https://api.github.com/repos/metatech-industries/metatech-website/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/metatech-industries/metatech-website/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/metatech-industries/metatech-website/teams',
    hooks_url: 'https://api.github.com/repos/metatech-industries/metatech-website/hooks',
    issue_events_url: 'https://api.github.com/repos/metatech-industries/metatech-website/issues/events{/number}',
    events_url: 'https://api.github.com/repos/metatech-industries/metatech-website/events',
    assignees_url: 'https://api.github.com/repos/metatech-industries/metatech-website/assignees{/user}',
    branches_url: 'https://api.github.com/repos/metatech-industries/metatech-website/branches{/branch}',
    tags_url: 'https://api.github.com/repos/metatech-industries/metatech-website/tags',
    blobs_url: 'https://api.github.com/repos/metatech-industries/metatech-website/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/metatech-industries/metatech-website/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/metatech-industries/metatech-website/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/metatech-industries/metatech-website/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/metatech-industries/metatech-website/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/metatech-industries/metatech-website/languages',
    stargazers_url: 'https://api.github.com/repos/metatech-industries/metatech-website/stargazers',
    contributors_url: 'https://api.github.com/repos/metatech-industries/metatech-website/contributors',
    subscribers_url: 'https://api.github.com/repos/metatech-industries/metatech-website/subscribers',
    subscription_url: 'https://api.github.com/repos/metatech-industries/metatech-website/subscription',
    commits_url: 'https://api.github.com/repos/metatech-industries/metatech-website/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/metatech-industries/metatech-website/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/metatech-industries/metatech-website/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/metatech-industries/metatech-website/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/metatech-industries/metatech-website/contents/{+path}',
    compare_url: 'https://api.github.com/repos/metatech-industries/metatech-website/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/metatech-industries/metatech-website/merges',
    archive_url: 'https://api.github.com/repos/metatech-industries/metatech-website/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/metatech-industries/metatech-website/downloads',
    issues_url: 'https://api.github.com/repos/metatech-industries/metatech-website/issues{/number}',
    pulls_url: 'https://api.github.com/repos/metatech-industries/metatech-website/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/metatech-industries/metatech-website/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/metatech-industries/metatech-website/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/metatech-industries/metatech-website/labels{/name}',
    releases_url: 'https://api.github.com/repos/metatech-industries/metatech-website/releases{/id}',
    deployments_url: 'https://api.github.com/repos/metatech-industries/metatech-website/deployments',
    created_at: 1597387924,
    updated_at: '2020-08-14T08:03:53Z',
    pushed_at: 1597392271,
    git_url: 'git://github.com/metatech-industries/metatech-website.git',
    ssh_url: 'git@github.com:metatech-industries/metatech-website.git',
    clone_url: 'https://github.com/metatech-industries/metatech-website.git',
    svn_url: 'https://github.com/metatech-industries/metatech-website',
    homepage: null,
    size: 6174,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    stargazers: 0,
    master_branch: 'master'
  },
  pusher: {
    name: 'ryanfarber',
    email: '32393930+ryanfarber@users.noreply.github.com'
  },
  sender: {
    login: 'ryanfarber',
    id: 32393930,
    node_id: 'MDQ6VXNlcjMyMzkzOTMw',
    avatar_url: 'https://avatars3.githubusercontent.com/u/32393930?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ryanfarber',
    html_url: 'https://github.com/ryanfarber',
    followers_url: 'https://api.github.com/users/ryanfarber/followers',
    following_url: 'https://api.github.com/users/ryanfarber/following{/other_user}',
    gists_url: 'https://api.github.com/users/ryanfarber/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/ryanfarber/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/ryanfarber/subscriptions',
    organizations_url: 'https://api.github.com/users/ryanfarber/orgs',
    repos_url: 'https://api.github.com/users/ryanfarber/repos',
    events_url: 'https://api.github.com/users/ryanfarber/events{/privacy}',
    received_events_url: 'https://api.github.com/users/ryanfarber/received_events',
    type: 'User',
    site_admin: false
  },
  created: false,
  deleted: false,
  forced: false,
  base_ref: null,
  compare: 'https://github.com/metatech-industries/metatech-website/compare/b14f1bc2143f...6c582f7b47aa',
  commits: [
    {
      id: '6c582f7b47aaad3408f1c1441ed88bc225278b74',
      tree_id: '023ee2efa887792e77b6b9a10e5064d8cf784da5',
      distinct: true,
      message: 'Update README.md',
      timestamp: '2020-08-14T01:04:26-07:00',
      url: 'https://github.com/metatech-industries/metatech-website/commit/6c582f7b47aaad3408f1c1441ed88bc225278b74',
      author: [Object],
      committer: [Object],
      added: [],
      removed: [],
      modified: [Array]
    }
  ],
  head_commit: {
    id: '6c582f7b47aaad3408f1c1441ed88bc225278b74',
    tree_id: '023ee2efa887792e77b6b9a10e5064d8cf784da5',
    distinct: true,
    message: 'Update README.md',
    timestamp: '2020-08-14T01:04:26-07:00',
    url: 'https://github.com/metatech-industries/metatech-website/commit/6c582f7b47aaad3408f1c1441ed88bc225278b74',
    author: {
      name: 'ryan farber',
      email: '32393930+ryanfarber@users.noreply.github.com',
      username: 'ryanfarber'
    },
    committer: {
      name: 'ryan farber',
      email: '32393930+ryanfarber@users.noreply.github.com',
      username: 'ryanfarber'
    },
    added: [],
    removed: [],
    modified: [ 'README.md' ]
  }
}

var twitch = new ContextBuilder.TwitchContext()
var discord = new ContextBuilder.DiscordContext()
var twilio = new ContextBuilder.TwilioContext()
var github = new ContextBuilder.GithubContext(githubData)

// console.log(twitch)
// console.log(discord)
// console.log(twilio)
console.log(github)



