import React from  "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 946219318;
        const serverSecret = "8e0b853d79deae0bcbfe949b73ca46a4";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Aksh Darji");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`,
                },
            ],
            scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
        },
        showScreensharingButton: false,
        });  
    };
    return <div>
        <div ref={myMeeting} />
    </div>
};

export default RoomPage;