import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import Messages from "../Messages";

const Chat = () => (
  <div>
    <h1>Chat Room</h1>
    <p>The Chat Room is accessible by every signed in user.</p>

    <Messages />
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(Chat);
