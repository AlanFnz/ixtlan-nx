import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Link } from '@ixtlan-nx/shared-types';

const MainContainer = styled.div`
  .page {
  } q
`;

export function Index() {
  const [links, setLinks] = useState<Link[]>(null);

  useEffect(() => {
    try {
      fetch('http://localhost:3333/links').then((res) =>
        res.json().then((data) => setLinks(data))
      );
    } catch (e) {
      console.log(e)
    }
  }, []);

  return (
    <MainContainer>
      <ul>
        {links && links.map(({ id, title, url }) => (
          <li key={id}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export default Index;
