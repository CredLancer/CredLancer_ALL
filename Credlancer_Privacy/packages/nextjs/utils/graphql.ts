import { SUBGRAPH_URI } from "./constants";

export const processRequest = async (query: string): Promise<any> => {
  try {
    return {
      data: await fetch(SUBGRAPH_URI, {
        method: "POST",
        body: JSON.stringify({ query }),
      }).then(res => res.json()),
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
