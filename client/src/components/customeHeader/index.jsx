import {ChatBubbleLeftRightIcon,PhoneIcon } from "@heroicons/react/24/solid"
import PropTypes from 'prop-types';



const Header = ({chat}) => {
  return (
    <div>
        <div className="chat-header">
            <div className="flexbetween">
                <ChatBubbleLeftRightIcon className="icon-chat"/>
                <h3 className="header-text">
                    {chat.title}
                </h3>
            </div>
            <div className="flexbetween">
                <PhoneIcon className="icon-phone"/>
                {
                    chat.description !== "⬅️ ⬅️ ⬅️"?
                    (
                        <p className="header-text">{chat.description}</p>
                    ):
                    (
                        <p className="header-text">No chat selected</p>
                    )

                
                }
            </div>
        </div>
    </div>
  )
}


Header.propTypes={
    chat:PropTypes.shape({
        title:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
    }).isRequired,
};

export default Header