export interface Commit {
  sha: string;
  commit: Commit2;
  committer: Committer;
  html_url: string;
}

interface Committer {
  login: string;
  avatar_url: string;
}
interface Author {
  name: string;
  email: string;
  date: Date;
}
interface Commit2 {
  author: Author;
  message: string;
}
