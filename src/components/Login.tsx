import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";

const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const Login: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(email, password);
      history.push("/");
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Card style={{ width: 500, margin: "100px auto", padding: "40px" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
          {" "}
          Sign in to an existing account
        </h1>
        <Field label="Email" {...bindEmail} type="email" />
        <Field label="Password" type="password" {...bindPassword} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={loading}
        >
          {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
          Login to Your Account
        </Button>
        {/* <DLink to="/signup">make a new account &rarr;</DLink> */}
      </form>
    </Card>
  );
};

export default Login;