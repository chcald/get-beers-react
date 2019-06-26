/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { styles, centerContent, title, description } from './styles'
import EmptyState from '../../../static/icons/overview-empty-state.svg'

// Components
import BeerDetail from 'components/BeersContainer/BeerDetail'

//icons
import BackArrowIcon from 'static/icons/back-arrow-default.svg'

const BeerDatail = ({ match }) => {

  const url = `https://api.punkapi.com/v2/beers/${match.params.id}`

  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data[0]);
    })();
  }, [url]);

  return (
    <div css={styles}>
      {!data ? (
        <content css={centerContent}>
          <img alt='Empty page' src={EmptyState} />
          <span css={title}>There’s nothing to show here yet. </span>
          <span css={description}>
            This page is Beer Detail
        </span>
        </content>) :
        <>
          <h2>Beer Detail</h2>
          <a href={`/beers`}><img src={BackArrowIcon} alt='Beers' ></img></a>
          <div css={centerContent}>
            <BeerDetail beer={data} />
          </div>
        </>}
    </div>
  )
}

export default BeerDatail
