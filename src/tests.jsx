import Button from "./Button";
import Card from "./Card";


function Tests() {
  return (
    <>
      <Button prp="Register" dt={1} />
      <Button prp="Login" dt={2} />
      <Button prp="Logout" dt={3} />
      <Card prp="MacBook"/>
    </>
  );
}

export default Tests;
