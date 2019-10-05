export default (query) => {
  const qs = query.replace('?', '');
  const items = qs.split('&');
  let compassID = ""
  let sessionID = ""
  let interactionID = ""
  
  items.forEach(element => {
    switch(element[0]){
      case 'c': 
        compassID = element.replace("c=","");
        break;
      case 's': 
        sessionID = element.replace("s=","");
        break;
      case 'i': 
        interactionID = element.replace("i=","");
        break;
    }
  })

  return {
    compassID ,
    sessionID,
    interactionID
  }
}