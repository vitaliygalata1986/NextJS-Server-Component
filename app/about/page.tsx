import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Next App',
  description: 'About page',
};

function About() {
  return <h3>Select subitem</h3>;
}

export default About;
