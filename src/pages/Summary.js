import React, { useContext, useEffect } from "react";
import SummarySession from "../components/SummaryComponents/SummarySession/";
import { CompassContext } from "../context/CompassPage/context";
import { updateInteractionSub } from "../utils/subscriptions"
import { getCompass } from '../utils/queries'

const SummaryPage = (props) => {
  const { updateCompass } = useContext(CompassContext);

  useEffect(() => {
    const sub = updateInteractionSub().subscribe((updatedInteraction) => {
      const newUpdatedInteraction = updatedInteraction.value.data.onUpdateInteraction
      getCompass(newUpdatedInteraction.session.compass.id)
        .then((res) => updateCompass(res.data.getCompass))
        .catch((err) => console.log(err))
    })

    return () => {
      sub.unsubscribe();
    }

    // eslint-disable-next-line
  }, [])

  return ( <SummarySession /> )
};

export default SummaryPage;
