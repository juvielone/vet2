import { MessengerChat } from "react-messenger-chat-plugin";
const MessengerChatBot = () => {
  return (
    <MessengerChat
      pageId={process.env.REACT_APP_PAGE_ID}
      appId={process.env.REACT_APP_APP_ID}
      themeColor={"#8D85DB"}
      loggedInGreeting="Welcome to our website! How can we assist you today?"
      loggedOutGreeting="Please log in to chat with us."
    />
  );
};

export default MessengerChatBot;
