// 消息通知类型
// type MsgType =  "text" | "link"  | "markdown"  | "actionCard" | "feedCard";
// enum MsgTypeEnum {
//     "text" ,
//     "link" ,
//     "markdown" ,
//     "actionCard" ,
//     "feedCard",
// }

// 消息  @ 谁的 数据结构
interface At {
    atMobiles? : string[]; // 被 @ 人的手机号列表
    isAtAll? : boolean; // 属否全部 @ 
}

// 文本 text 消息类型
type TextMsgType = {
    msgtype: "text";
    text: TextContent;
    at?: At;
}

// 文本 text 消息内容
interface TextContent {
    content: string;
}

// 链接 link 消息类型
type LinkMsgType = {
    msgtype: "link";
    link: LinkContent;
}
// 链接 link 消息内容
interface LinkContent {
    title: string; // 消息标题
    text: string; // 消息内容。如果太长只会部分展示
    messageUrl: string; //点击消息跳转的URL
    picUrl?: string; //图片URL
}

// markdown 消息类型
type MarkdowmMsgType = {
    msgtype: "markdown";
    markdown: markdownContent;
    at?: At;
}
// markdown 消息内容
interface markdownContent {
    title: string; // 消息标题
    text: string; // 消息内容。如果太长只会部分展示
}


// 整体跳转 ActionCard 消息类型
type SingleActionCardMsgType = {
    msgtype: "actionCard";
    actionCard: SingleActionCardContent;
    at?: At;
}
// 整体跳转 ActionCard 消息内容
interface SingleActionCardContent {
    title: string; // 消息标题
    text: string; // 消息内容,markdown格式的消息,
    singleTitle: string; // 单个按钮的标题
    singleURL: string; // 点击singleTitle按钮触发的URL
    btnOrientation?: string; // 0-按钮竖直排列，1-按钮横向排列
}

// 独立跳转 ActionCard 消息类型
type BtnsActionCardMsgType = {
    msgtype: "actionCard";
    actionCard: BtnsActionCardContent;
    at?: At;
}
// 独立跳转 ActionCard 消息内容
interface BtnsActionCardContent {
    title: string; // 消息标题
    text: string; // 消息内容,markdown格式的消息,
    btns: Array<BtnsActionCardBtnsInfo>; // 按钮的详细信息
    btnOrientation: string; // 0-按钮竖直排列，1-按钮横向排列
}
// 独立跳转 ActionCard 按钮的详细信息
interface BtnsActionCardBtnsInfo {
    title: string; // 按钮标题
    actionURL: string; //点击按钮触发的URL
}

export type SendMsyType = TextMsgType | LinkMsgType | MarkdowmMsgType | SingleActionCardMsgType | BtnsActionCardMsgType
