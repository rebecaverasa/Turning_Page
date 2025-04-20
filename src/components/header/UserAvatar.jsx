import * as React from "react";
import { Avatar } from "@rneui/base";

const UserAvatar = () => {
    return (
        <Avatar
            activeOpacity={0.2}
            containerStyle={{ backgroundColor: "#F4D07A" }}
            rounded
            size="small"
            source={{ uri: "" }}
            title={"R"}
        />

    );
}

export default UserAvatar;