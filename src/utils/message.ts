export class MessageHelper {
  noticeMessage(noticeMessage: string) {
    console.log('noticeMessage', noticeMessage);
  }
  warnMessage(warnMessage: string) {
    console.log('warnMessage', warnMessage);
  }
  errorMessage(errorMessage: string) {
    console.log('errorMessage', errorMessage);
  }
}
const messageHelper = new MessageHelper();
export default messageHelper;
