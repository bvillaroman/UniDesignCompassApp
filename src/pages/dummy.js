import React from "react";
import { createUser, createCompass } from '../utils/mutations';
import { getUser, getCompass } from '../utils/queries';


class Test1 extends React.Component {
  render() {
    // Create the User
    createUser('random@email.com')
      .then(res => console.log(res))
      .catch(err => console.log("Missing email or name"))

    // Get the User
    // getUser("05cc4c48-49b4-4b1e-87f1-c15206d7c8b9")
    //   .then(res => console.log(res), err => console.log(err))

    //-----------------------------------------
    // Create the compass
    // createCompass('Compass: Science', 'Compass for the science porject', '1d-9c28-43c6-b0ee-e0cae140380f')
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))

    // Get the compass
    // getCompass("681d44bb-9293-41af-bfbd-4e2e1ef16c7b")
    //   .then(res => console.log(res), err => console.log(err))

    return (
      <div>
        <h1>Hi</h1>
        <div>
          {/* {createUser("test@email.com", "Kenny")
            .then(res => {
              console.log(res);
              getUser(res.createUser.id);
            },
              err => { console.log(err); })
          } */}

        </div>
      </div>
    )
  }
}

export default Test1;
