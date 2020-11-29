import request from "superagent";
import { hmacSHA256, urlEncode } from "./helper";
import { SendMsyType } from "./interface";
import assert from "assert";
// 实例化钉钉 需要的参数
interface DingdingOption {
  webhook: string; // Webhook 地址
  secret?: string; // 密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串
}

interface NotityResBody {
  errcode: number; // 响应码
  errmsg: string; // 响应信息
}
// https://oapi.dingtalk.com/robot/send?access_token=dec7f2c9b91a0c2fddccdb8ef61c6df769bc1993727eb9e621cfa38603917faf
export class Dingding {
  private webhook: string;
  private secret?: string;
  constructor(option: DingdingOption) {
    this.webhook = option.webhook;
    this.secret = option.secret;
  }

  /**
   * 发送通知
   * @param sendMsg 需要发送的消息
   */
  async notity(sendMsg: SendMsyType): Promise<NotityResBody> {
    let webhookUrl = new URL(this.webhook);
    if (this.secret) {
      const timestamp = Date.now();
      webhookUrl.searchParams.append("timestamp", timestamp + "");
      webhookUrl.searchParams.append("sign", this.sign(timestamp))
    };
    try {
      const res = await request.post(webhookUrl.href).send(sendMsg);
      return res.body;
    } catch(err: any){
      throw new Error(`钉钉通知失败:  ${err.msg}`)
    }
  }

  private sign(timestamp: number) {
    assert(this.secret, "签名的密钥是必须的");
    return urlEncode(hmacSHA256(timestamp + "\n" + this.secret, this.secret!));
  }
}
