import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => { //lamda functions means it gets get died after doing its job everytime its get called
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

//this is the api route for creating a new prompt
