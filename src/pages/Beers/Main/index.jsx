/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from '@emotion/core'
import { styles, title, description } from './styles'
import EmptyState from '../../../static/icons/overview-empty-state.svg'

// Components
import BeersContainer from '../../../components/BeersContainer';

const MainPageBeers = () => {
  const url = `https://api.punkapi.com/v2/beers`

  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    })();
  }, [url]);


  return (
    <div css={styles}>
      {!data ? (
        <content>
          <img alt='Empty page' src={EmptyState} />
          <span css={title}>There’s nothing to show here yet.</span>
          <span css={description}>
            This page is Main Page Beers
        </span>
        </content>) :
        <BeersContainer
          beers={data}
        />

      }
    </div>
  )
}

export default MainPageBeers
