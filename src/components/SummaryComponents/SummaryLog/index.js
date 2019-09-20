import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';

const Link = ({ item, name }) => {
  const [link, setLink] = useState(undefined)
  Storage.get(item)
    .then(result => setLink(result))
    .catch(err => console.log('You have no attachments', err))
  return (link ? <h3><a href={link} target="__blank__">{name}</a></h3> : null)
}

const LinkArray = ({ items }) => {
  // console.log(items);
  return (
    <>
      {items.map(item => <Link name={item.name} item={item.key} />)}
    </>
  )

}

const SummaryLog = ({ attachments, showLog, currentLog }) => {
  const { items } = attachments;
  return (
    <div style={{ padding: '2em', width: '100%' }}>
      <div>
        <h4 style={{ padding: '0', margin: '0', display: "inline-block" }}>Log and Attachments</h4>
        <button style={{ float: 'right' }} onClick={() => showLog()}>Return to all Logs</button>
      </div>
      <div style={{ width: '100%', borderRadius: '10px', borderColor: 'black', borderStyle: 'solid', height: '80%' }}>
        <h4>{currentLog}</h4>
      </div>
      <LinkArray items={items} />
    </div >
  )
}

export default SummaryLog;



