import { notification, Modal } from 'antd';

const { confirm } = Modal;

export function showNotification(
  typeValue,
  descriptionValue,
  messageValue,
  durationValue,
  placementValue,
) {
  notification[typeValue]({
    description: descriptionValue || '',
    message: messageValue || '',
    duration: durationValue || 3,
    placement: placementValue || 'topLeft',
  });
}

export function showConfirmDialog(
  title,
  contentName,
  typeValue,
  okButtonCaption,
  cancelButtonCaption,
  okActionToTrigger,
  cancelActionToTrigger,
) {
  confirm({
    title,
    content: contentName,
    okType: typeValue,
    okText: okButtonCaption,
    cancelText: cancelButtonCaption,
    onOk() {
      if (okActionToTrigger) okActionToTrigger();
    },
    onCancel() {
      if (cancelActionToTrigger) cancelActionToTrigger();
    },
  });
}
