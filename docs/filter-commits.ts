type Commit = {
  commit: string;
  author: string;
  date: string;
  message: string;
};

function filterCommitsByTicket(
  commits: Commit[],
  ticketAcronym: string
): Commit[] {
  const regex = new RegExp(`${ticketAcronym}-\\d{3}`);
  return commits.filter((commit) => regex.test(commit.message));
}
