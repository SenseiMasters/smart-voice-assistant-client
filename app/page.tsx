import { ChatContainer } from "@/containers/chat";
import { PromptProvider } from "@/providers/prompt.provider";

export default function Home() {
  return (
    <PromptProvider>
      <ChatContainer />
    </PromptProvider>
  );
}
