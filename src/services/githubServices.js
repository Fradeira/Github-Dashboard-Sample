import { Octokit } from "@octokit/rest";

// Personal Oauth
const octokit = new Octokit({
    auth: process.env.REACT_GITHUB_TOKEN,
    clientId: process.env.CLIENT_ID,
    userAgent: 'github dashboard sample v1'
});

// Get USER
export const getUsers = async (name) => {
    return await octokit.request('GET /search/users', {
        q: name ? name : 'Fra'
    });
};

// Get REPOS of a user
export const getRepos = async (name) => {
    return await octokit.request('GET /users/{username}/repos', {
        username: name
    });
};

// Get REPO
export const getRepo = async (name, repo) => {
    return await octokit.request('GET /repos/{owner}/{repo}', {
        owner: name,
        repo: repo
    });
};
