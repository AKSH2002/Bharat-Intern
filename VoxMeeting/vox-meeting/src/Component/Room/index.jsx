import React from  "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 2115094084;
        const serverSecret = "103c81065bd402a93491d0bd19e87e7b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Aksh Darji");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Room Code',
                    url: `${roomId}`,
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