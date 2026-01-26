import PromptSync from "prompt-sync";

export function prompt() {
    const promptInput = PromptSync({sigint: true});
    return promptInput;
}

