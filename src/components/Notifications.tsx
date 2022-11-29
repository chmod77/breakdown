import {notification} from 'antd';


const openNotificationWithIcon = (type: string, message: string, description: string) => {
    if (type == 'success') {
        notification[type]({ message: message, description: description, top:100, style: { borderRadius: '10px', } });
    }
    else if (type == 'error') {
        notification[type]({ message: message, description: description, top:100, style: { borderRadius: '10px', } });
    }
    return;
};

export default openNotificationWithIcon;