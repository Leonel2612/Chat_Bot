import { useMultiChatLogic,MultiChatSocket,MultiChatWindow } from "react-chat-engine-advanced"
import Header from "../customeHeader"
import StandardMessageForm from "../customeMessageForms/StandardMessageForm"
import Ai from "../customeMessageForms/Ai"
import AiCode from "../customeMessageForms/AiCode"
import AiAssist from "../customeMessageForms/AiAssist"
import PropTypes from 'prop-types';


const Chat = ({user,secret}) => {
  const chatProps=useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  );

  return(
    <div style={{flexBasis:"100%"}}> <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps}
    style={{height:"100vh"}}
    renderChatHeader={(chat)=> <Header chat={chat}/>}
    renderMessageForm={(props)=>{

      if (chatProps.chat?.title.startsWith("AiChat_")){
        return <Ai props={props} activeChat={chatProps.chat} />
      }

      if (chatProps.chat?.title.startsWith("AiCode_")){
        return <AiCode props={props} activeChat={chatProps.chat} />
      }

      if (chatProps.chat?.title.startsWith("AiAssist_")){
        return <AiAssist props={props} activeChat={chatProps.chat} />
      }


      return(
        <StandardMessageForm props={props} activeChat={chatProps.chat}/>
      )
    }}
    />
      
    </div>
  )
}

Chat.propTypes={
  user:PropTypes.string,
  secret:PropTypes.string,
  
};

export default Chat