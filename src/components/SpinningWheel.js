import React from "react"

const SpinningWheel = (props) => {
  const style = {
      position: 'fixed',
      zIndex: '1020',
      top: '50%',
      left: '50%',
      width:'5em',
      height: '5em',
      marginTop: '-2.5em',
      marginLeft: '-2.5em'
  }
  return (<div style={style} className={'spinner-grow text-info'}></div>);
}

export default SpinningWheel;