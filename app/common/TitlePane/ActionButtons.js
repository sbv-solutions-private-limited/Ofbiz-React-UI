/* eslint-disable no-return-assign */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Menu } from 'antd';

import { showConfirmDialog } from '../Dialogs/AppDialogs';
import styles from './TitlePane.less';

class ActionButtons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: this.props.currentAction,
      toggleNew: false,
      toggleSave: true,
      toggleUpdate: true,
      toggleClose: true,
      // selectedObjects: this.props.selectedObjects || [],
      // Modal
      modalTitle: '',
      modalokType: '',
      modalValues: [],
      okActionToTrigger: '',
    };
  }

  componentDidMount() {
    this.props.setClick(this.toggleButtons);
  }

  toggleButtons = eventName => {
    if (eventName === 'new') {
      this.setState(
        {
          currentAction: eventName,
          toggleNew: true,
          toggleSave: false,
          toggleUpdate: true,
          toggleClose: false,
        },
        () => {
          this.props.toggleTableAndForm(eventName, true, false);
        },
      );
    } else if (eventName === 'view') {
      this.setState(
        {
          currentAction: eventName,
          toggleNew: true,
          toggleSave: false, //true
          toggleUpdate: true,
          toggleClose: false,
        },
        () => {
          this.props.toggleTableAndForm(eventName, true, false);
        },
      );
    } else if (eventName === 'edit') {
      this.setState(
        {
          currentAction: eventName,
          toggleNew: true,
          toggleSave: true,
          toggleUpdate: false,
          toggleClose: false,
        },
        () => {
          this.props.toggleTableAndForm(eventName, true, false);
        },
      );
    } else if (
      eventName === 'save' ||
      eventName === 'update' ||
      eventName === 'close'
    ) {
      this.setState(
        {
          currentAction: eventName,
          toggleNew: false,
          toggleSave: true,
          toggleUpdate: true,
          toggleClose: true,
          // selectedObjects: [],
        },
        () => {
          this.props.toggleTableAndForm('close', false, true);
          this.props.resetDropdownMenuButtons();
        },
      );
    }
  };

  triggerShowConfirmDialog = actionName => {
    const { selectedObjects, handleSubmitAction } = this.props;
    const names = [];
    if (selectedObjects) {
      selectedObjects.map(selectedRow => names.push(selectedRow.dialogContent));
    }
    const title = `Are you sure to ${actionName} listed below ?`;
    const contentName = `Name= ${names}`;
    const typeValue = 'danger';
    const okButtonCaption = actionName;
    const cancelButtonCaption = 'Cancel';

    let okActionToTrigger = '';

    if (actionName === 'Activate') {
      okActionToTrigger = () => handleSubmitAction('activate');
    } else if (actionName === 'Activate All') {
      okActionToTrigger = () => handleSubmitAction('activateAll');
    } else if (actionName === 'De-Activate') {
      okActionToTrigger = () => handleSubmitAction('deactivate');
    } else if (actionName === 'De-Activate All') {
      okActionToTrigger = () => handleSubmitAction('deactivateAll');
    } else if (actionName === 'Block') {
      okActionToTrigger = () => handleSubmitAction('block');
    } else if (actionName === 'Block All') {
      okActionToTrigger = () => handleSubmitAction('blockAll');
    } else if (actionName === 'Unblock') {
      okActionToTrigger = () => handleSubmitAction('unblock');
    } else if (actionName === 'Unblock All') {
      okActionToTrigger = () => handleSubmitAction('unblockAll');
    } else if (actionName === 'Delete') {
      okActionToTrigger = () => handleSubmitAction('delete');
    } else if (actionName === 'Delete All') {
      okActionToTrigger = () => handleSubmitAction('deleteAll');
    }

    showConfirmDialog(
      title,
      contentName,
      typeValue,
      okButtonCaption,
      cancelButtonCaption,
      okActionToTrigger,
      null,
    );
  };

  triggerApprovalModelDialog = actionName => {
    const { handleSubmitAction } = this.props;

    let okActionToTrigger = '';
    let modalokTypeValue = 'dashed';

    if (actionName === 'Approve') {
      modalokTypeValue = 'primary';
      okActionToTrigger = values => handleSubmitAction('Approve', values);
    } else if (actionName === 'Assign') {
      okActionToTrigger = values => handleSubmitAction('Assign', values);
    } else if (actionName === 'Approve&Assign') {
      okActionToTrigger = values =>
        handleSubmitAction('Approve&Assign', values);
    } else if (actionName === 'Hold') {
      okActionToTrigger = values => handleSubmitAction('Hold', values);
    } else if (actionName === 'Cancel') {
      modalokTypeValue = 'danger';
      okActionToTrigger = values => handleSubmitAction('Cancel', values);
    } else if (actionName === 'Reject') {
      modalokTypeValue = 'danger';
      okActionToTrigger = values => handleSubmitAction('Reject', values);
    } else if (actionName === 'Close/Expiry') {
      modalokTypeValue = 'danger';
      okActionToTrigger = values => handleSubmitAction('Close/Expiry', values);
    }

    this.setState({
      modalTitle: actionName,
      okActionToTrigger,
      modalokType: modalokTypeValue,
    });

    this.showModal();
  };

  callSaveButton = () => {
    document.getElementById('saveButtonId').click();
  };

  render() {
    const {
      currentAction,
      toggleNew,
      toggleSave,
      toggleUpdate,
      toggleClose,
      // selectedObjects,
      modalTitle,
      modalokType,
      modalValues,
      okActionToTrigger,
    } = this.state;

    const {
      formElementId,
      clearFormFieds,
      toggleTableRowsSelected,
      selectedObjects,
      enableSaveButtonValue,
    } = this.props;

    let activateFlag = true;
    let inActivateFlag = true;
    let blockFlag = true;
    let unBlockFlag = true;
    let deleteFlag = true;
    let statusFlag = true;
    let blockedFlag = false;

    let activateCount = 0;
    let inActivateCount = 0;
    let blockCount = 0;
    let blockUndefined;
    let statusUndefined;
    let makeDefaultUndefined;

    for (let i = 0; i < selectedObjects.length; i += 1) {
      statusFlag = selectedObjects[i].status;
      blockedFlag = selectedObjects[i].blocked;
      if (selectedObjects[i].status === true) {
        activateCount += 1;
      } else {
        inActivateCount += 1;
      }
      if (selectedObjects[i].blocked === true) {
        blockCount += 1;
      }
      blockUndefined = selectedObjects[i].blocked;
      statusUndefined = selectedObjects[i].status;
      makeDefaultUndefined = selectedObjects[i].isDefault;
    }

    if (blockCount === selectedObjects.length) {
      activateFlag = true;
      inActivateFlag = true;
      blockFlag = true;
      unBlockFlag = false;
    } else if (activateCount > 0 && inActivateCount > 0 && blockCount > 0) {
      activateFlag = true;
      inActivateFlag = true;
      blockFlag = true;
      unBlockFlag = true;
      makeDefaultUndefined = true;
    } else if (activateCount > 0 && inActivateCount > 0 && blockCount <= 0) {
      activateFlag = true;
      inActivateFlag = true;
      blockFlag = false;
      unBlockFlag = true;
      makeDefaultUndefined = true;
    } else if (activateCount > 0 && inActivateCount <= 0 && blockCount <= 0) {
      activateFlag = true;
      inActivateFlag = false;
      blockFlag = false;
      unBlockFlag = true;
      makeDefaultUndefined = true;
    } else if (activateCount <= 0 && inActivateCount > 0 && blockCount <= 0) {
      activateFlag = false;
      inActivateFlag = true;
      blockFlag = false;
      unBlockFlag = true;
      makeDefaultUndefined = true;
    } else if (activateCount <= 0 && inActivateCount <= 0 && blockCount > 0) {
      activateFlag = true;
      inActivateFlag = true;
      blockFlag = true;
      unBlockFlag = false;
      makeDefaultUndefined = true;
    }

    if (selectedObjects.length > 0) {
      deleteFlag = false;
    } else {
      deleteFlag = true;
      activateFlag = true;
      inActivateFlag = true;
      blockFlag = true;
      unBlockFlag = true;
    }

    const mainDropdown = (
      <Menu>
        <Menu.Item
          key="9"
          hidden={currentAction !== 'close'}
          onClick={() => toggleTableRowsSelected(true)}
        >
          <Icon type="check" />Select All
        </Menu.Item>
        <Menu.Item
          key="10"
          hidden={currentAction !== 'close'}
          onClick={() => toggleTableRowsSelected(false)}
        >
          <Icon type="close" />Deselect All
        </Menu.Item>
        <Menu.Divider
          className={
            currentAction === 'close' ? styles.dividerShow : styles.dividerHide
          }
        />
        <Menu.Item
          key="11"
          hidden={
            currentAction !== 'close' ||
            activateFlag ||
            statusUndefined === undefined ||
            statusUndefined === null ||
            statusUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('Activate All')}
        >
          <Icon type="plus" />Activate Selected
        </Menu.Item>
        <Menu.Item
          key="12"
          hidden={
            currentAction !== 'close' ||
            inActivateFlag ||
            statusUndefined === undefined ||
            statusUndefined === null ||
            statusUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('De-Activate All')}
        >
          <Icon type="minus" />De-activate Selected
        </Menu.Item>
        <Menu.Item
          key="13"
          hidden={
            currentAction !== 'close' ||
            blockFlag ||
            selectedObjects.blocked === '' ||
            blockUndefined === undefined ||
            blockUndefined === null ||
            blockUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('Block All')}
        >
          <Icon type="close-circle" theme="outlined" />Block Selected
        </Menu.Item>
        <Menu.Item
          key="14"
          hidden={
            currentAction !== 'close' ||
            unBlockFlag ||
            blockUndefined === undefined ||
            blockUndefined === null ||
            blockUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('Unblock All')}
        >
          <Icon type="close-circle" theme="outlined" />Unblock Selected
        </Menu.Item>
        <Menu.Item
          key="15"
          hidden={currentAction !== 'close' || deleteFlag}
          onClick={() => this.triggerShowConfirmDialog('Delete All')}
        >
          <Icon type="delete" />Delete Selected
        </Menu.Item>
        <Menu.Divider
          className={
            currentAction === 'close' ? styles.dividerShow : styles.dividerHide
          }
        />
        <Menu.Item
          key="16"
          hidden={
            currentAction !== 'edit' ||
            statusFlag === true ||
            statusUndefined === undefined ||
            statusUndefined === null ||
            statusUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('Activate')}
        >
          <Icon type="plus" />Activate
        </Menu.Item>
        <Menu.Item
          key="17"
          hidden={
            currentAction !== 'edit' ||
            statusFlag === false ||
            statusUndefined === undefined ||
            statusUndefined === null ||
            statusUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('De-Activate')}
        >
          <Icon type="minus" />De-activate
        </Menu.Item>
        <Menu.Item
          key="18"
          hidden={currentAction !== 'edit'}
          onClick={() => this.triggerShowConfirmDialog('Delete')}
        >
          <Icon type="delete" />Delete
        </Menu.Item>
        <Menu.Item
          key="19"
          hidden={
            currentAction !== 'edit' ||
            blockedFlag === true ||
            blockUndefined === undefined ||
            blockUndefined === null ||
            blockUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('Block')}
        >
          <Icon type="close-circle" theme="outlined" />Block
        </Menu.Item>
        <Menu.Item
          key="20"
          hidden={
            currentAction !== 'edit' ||
            blockedFlag === false ||
            blockUndefined === undefined ||
            blockUndefined === null ||
            blockUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('Unblock')}
        >
          <Icon type="check-circle" theme="outlined" />Unblock
        </Menu.Item>
        <Menu.Item
          key="21"
          hidden={
            currentAction !== 'edit' ||
            makeDefaultUndefined === true ||
            makeDefaultUndefined === undefined ||
            makeDefaultUndefined === null ||
            makeDefaultUndefined === ''
          }
          onClick={() => this.triggerShowConfirmDialog('MakeDefault')}
        >
          <Icon type="user" theme="outlined" />MakeDefault
        </Menu.Item>
        <Menu.Item
          key="22"
          hidden={currentAction !== 'new'}
          onClick={() => {
            clearFormFieds();
          }}
        >
          <Icon type="reload" theme="outlined" />Clear All
        </Menu.Item>
        <Menu.Item key="23" hidden={currentAction === 'new'}>
          <Icon type="printer" />Print
        </Menu.Item>
        <Menu.Item key="24" hidden={currentAction === 'new'}>
          <Icon type="file-pdf" />Export To PDF
        </Menu.Item>
        <Menu.Item key="25" hidden={currentAction === 'new'}>
          <Icon type="file" />Export To CSV
        </Menu.Item>
      </Menu>
    );
    console.log(this.props.disabled);
    return (
      <Fragment>
        <Button
          type="primary"
          icon="plus"
          size="default"
          disabled= {this.props.disabled}
          onClick={() => {
            this.toggleButtons('new');
            clearFormFieds();
          }}
          hidden={toggleNew}
        >
          New
        </Button>
        <Button
          form={formElementId}
          id="saveButtonId"
          type="primary"
          htmlType="submit"
          icon="save"
          size="default"
          disabled={enableSaveButtonValue}
          onClick={() => {
            this.toggleButtons('save');
          }}
          hidden={toggleSave}
        >
          Save
        </Button>
        <Button
          form={formElementId}
          type="primary"
          htmlType="submit"
          icon="save"
          size="default"
          disabled={enableSaveButtonValue}
          onClick={() => {
            this.toggleButtons('update');
          }}
          hidden={toggleUpdate}
        >
          Update
        </Button>
        <Button
          type="danger"
          icon="close"
          size="default"
          onClick={() => {
            this.toggleButtons('close');
            clearFormFieds();
          }}
          hidden={toggleClose}
        />
      </Fragment>
    );
  }
}

ActionButtons.defaultProps = {};

ActionButtons.propTypes = {
  selectedObjects: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  currentAction: PropTypes.string,
  formElementId: PropTypes.string,
  clearFormFieds: PropTypes.func,
  toggleTableRowsSelected: PropTypes.func,
  setClick: PropTypes.func,
  toggleTableAndForm: PropTypes.func,
  resetDropdownMenuButtons: PropTypes.func,
  enableSaveButtonValue: PropTypes.any,
};

export default ActionButtons;
