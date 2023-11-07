import { observer } from "mobx-react-lite";
import useStore from "../Hooks/useStore";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const GithubUserDetails = observer(() => {
  const {
    rootStore: {userDetailsStore}
  } = useStore();

  const demo = useStore();
  console.log(demo, 'demo')

  const [text, setText] = useState("");

  const handleSubmit = () => {
    userDetailsStore.fetchGithubUserDetails(text);
  };
  return (
    <div>
      <div>
        <div>User Name: {userDetailsStore.getUserDetails?.name}</div>
        <div>User Location: {userDetailsStore.getUserDetails?.location}</div>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Github user</Form.Label>
          <Form.Control
            type="text"
            value={text}
            placeholder="Enter Github Username"
            onChange={(event) => setText(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Search User
        </Button>
      </Form>
    </div>
  );
});
export default GithubUserDetails;
