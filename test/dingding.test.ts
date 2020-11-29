import { Dingding } from "../src";

test("通知 text 类型的文本", async () => {
    const dingding = new Dingding({
        webhook: "https://oapi.dingtalk.com/robot/send?access_token=dec7f2c9b91a0c2fddccdb8ef61c6df769bc1993727eb9e621cfa38603917faf",
        secret: "SEC5b81e90a502e21583d51f2711f4634c3a9ddf9f37dc3d97204157c1621520f08"
    });

    const body = await dingding.notity({
        msgtype: "text",
        text: {
            content: "this is text test"
        }
    });
    expect(body.errcode).toBe(0)
});

test("通知 link 类型的文本", async () => {
    const dingding = new Dingding({
        webhook: "https://oapi.dingtalk.com/robot/send?access_token=dec7f2c9b91a0c2fddccdb8ef61c6df769bc1993727eb9e621cfa38603917faf",
        secret: "SEC5b81e90a502e21583d51f2711f4634c3a9ddf9f37dc3d97204157c1621520f08"
    });

    const body = await dingding.notity({
        msgtype: "link",
        link: {
           title: "this is link title",
           text: "this is link text",
           messageUrl: "https://ding-doc.dingtalk.com/doc#/serverapi3/iydd5h" 
        }
    });
    expect(body.errcode).toBe(0)
});

test("通知 mardown 类型的文本", async () => {
    const dingding = new Dingding({
        webhook: "https://oapi.dingtalk.com/robot/send?access_token=dec7f2c9b91a0c2fddccdb8ef61c6df769bc1993727eb9e621cfa38603917faf",
        secret: "SEC5b81e90a502e21583d51f2711f4634c3a9ddf9f37dc3d97204157c1621520f08"
    });

    const body = await dingding.notity({
        msgtype: "markdown",
        markdown: {
            title: "this is markdown title",
            text: "#### 杭州天气 @150XXXXXXXX \n> 9度，西北风1级，空气良89，相对温度73%\n> ![screenshot](https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png)\n> ###### 10点20分发布 [天气](https://www.dingtalk.com) \n"
        }
    });
    expect(body.errcode).toBe(0)
});

test("通知 SingleActionCardContent 类型的文本", async () => {
    const dingding = new Dingding({
        webhook: "https://oapi.dingtalk.com/robot/send?access_token=dec7f2c9b91a0c2fddccdb8ef61c6df769bc1993727eb9e621cfa38603917faf",
        secret: "SEC5b81e90a502e21583d51f2711f4634c3a9ddf9f37dc3d97204157c1621520f08"
    });

    const body = await dingding.notity({
        msgtype: "actionCard",
        actionCard: {
            title: "乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身", 
            text: `![screenshot](https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png) 
     ### 乔布斯 20 年前想打造的苹果咖啡厅 
     Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`, 
            singleTitle : "阅读全文==",
            singleURL : "https://www.dingtalk.com/"
        }
    });
    expect(body.errcode).toBe(0)
});

test("通知 独立跳转ActionCard 类型的文本", async () => {
    const dingding = new Dingding({
        webhook: "https://oapi.dingtalk.com/robot/send?access_token=dec7f2c9b91a0c2fddccdb8ef61c6df769bc1993727eb9e621cfa38603917faf",
        secret: "SEC5b81e90a502e21583d51f2711f4634c3a9ddf9f37dc3d97204157c1621520f08"
    });

    const body = await dingding.notity({
        msgtype: "actionCard",
        actionCard: {
            title: "乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身", 
            text: `![screenshot](https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png) 
     ### 乔布斯 20 年前想打造的苹果咖啡厅 
     Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`, 
            btnOrientation: "0", 
            btns: [
                {
                    title: "内容不错", 
                    actionURL: "https://www.dingtalk.com/"
                }, 
                {
                    title: "不感兴趣", 
                    actionURL: "https://www.dingtalk.com/"
                }
            ]
        }
    });
    expect(body.errcode).toBe(0)
});