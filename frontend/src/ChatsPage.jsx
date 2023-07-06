import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        // projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        projectId="8e8326a9-da24-40f1-905c-f86914b83d94"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;