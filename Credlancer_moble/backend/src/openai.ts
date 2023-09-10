import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "./config";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const QUESTION_TEMPLATE =
  "For the given job description, provide me with some core development skills that this job requires, and write nothing more than those skills in JSON format in order of importance:";

export async function getSkills(description: string) {
  const question = `${QUESTION_TEMPLATE}\n\n"""${description}"""`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return JSON.parse(response.data.choices[0].text as string);
}
