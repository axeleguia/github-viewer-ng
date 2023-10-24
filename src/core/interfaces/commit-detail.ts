export interface CommitDetail {
  sha: string;
  commit: Commit;
}

interface Author {
  name: string;
  email: string;
  date: Date;
}
interface Commit {
  author: Author;
  message: string;
}
