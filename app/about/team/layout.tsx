import Link from 'next/link';

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Team Layout</h1>
      <ul>
        <li>
          <Link href="/about/team/team_1">Team 1</Link>
        </li>
        <li>
          <Link href="/about/team/team_2">Team 2</Link>
        </li>
        <li>
          <Link href="/about/team/1">Team id 1</Link>
        </li>
        <li>
          <Link href="/about/team/2">Team id 2</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
