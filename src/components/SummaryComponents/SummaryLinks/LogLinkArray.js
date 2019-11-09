import React from 'react';
import LogLink from './LogLink'

const LogLinkArray = ({ items }) => {
  // console.log({ items })
  return (
    <>

      {items.length && items.map((item, i) => <LogLink item={item} key={i} />)}
      {/* {<Link name={item.name} key={i} />} */}

    </>
  )
}

export default LogLinkArray;