import React from 'react';
import {Image} from 'react-native';


const RenderIcons = (props) => {
    return(
        <Image
             source={props.image}
             style={{ height: 20, width: 20, tintColor: props.tintColor }}
        />
    )
}

export default RenderIcons;