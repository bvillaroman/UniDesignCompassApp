import React from 'react';
import LogLink from './LogLink'

const LogLinkArray = ({ items }) => {
  return (
    <>
      {items.length && items.map((item, i) => <LogLink item={item} key={i} />)}
    </>
  )
}

export default LogLinkArray;