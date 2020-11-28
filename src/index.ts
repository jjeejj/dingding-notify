import request from "superagent";
import { SendMsyType } from "./interface";
// 实例化钉钉 需要的参数
interface DingdingOption {
  webhook: string; // Webhook 地址
  secret?: string; // 密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串
}

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
  async notity(sendMsg: SendMsyType){

  }
}
