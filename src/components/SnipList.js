import React from 'react';
import Snip from './Snip';

export default function SnipList({ snippets }) {
  return (
    <section id="snippets">
      {snippets.map(snippet => (
        <Snip key={snippet.id} snippet={snippet} />
      ))}
    </section>
  );
}
