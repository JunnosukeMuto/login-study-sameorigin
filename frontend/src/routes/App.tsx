import { useState, useEffect } from "react";
import axios from "axios";

export default function Index() {
  const [response, setResponse] = useState<null | { username: string }>(null);
  async function getHello() {
    await axios
      .get("http://localhost/api/data")
      .then((res) => {
        setResponse(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getHello();
  }, []);

  return (
    <>
      <div className="flex gap-6 p-6">
        {response
          ? "Hello, " + response.username + "!"
          : "You are an anonymous user."}
      </div>
    </>
  );
}
