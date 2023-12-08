import { useState, useEffect } from "react";
import axios from "axios";

export default function Index() {
  type responseType = null | { hello: string };
  const [response, setResponse] = useState<responseType>(null);
  async function getHello() {
    await axios
      .get("http://localhost:5000/api/hello")
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
        {response ? response.hello+"!!!" : "no response!!!"}
      </div>
    </>
  );
}
