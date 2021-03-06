import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Layout, Form } from 'antd';
import TitlePane from '../../../common/TitlePane/TitlePane';
import { submitAction } from '../../../common/TitlePane/submitAction';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import AgreementsTable from './BillingAccountTable';
import AgreementsForm from './BillingAccountForm';
import * as localConsts from './BillingAccountConsts';
import styles from '../../../common/Styles.less';
const { Content } = Layout;
class BillingAccountView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: actionConsts.ACTION_TYPE_CLOSE,
      toggleTable: false,
      toggleForm: true,
      selectedIds: [],
      selectedObjects: [],
      pageTitleObject: [],
      enableSaveButtonValue: true,
      disabled: true,
      activeKey: '2',
      key: '1',
    };
  }
  namespaceValue = localConsts.NAMESPACE;
  pageTitleValue = localConsts.PAGE_TITLE;
  pageTitleTaglineValue = localConsts.PAGE_TITLE_TAGLINE;
  formElementIdValue = localConsts.FORM_ID;
  notificationTitle = localConsts.NOTIFICATION_TITLE;
  componentDidMount() {
    this.handleSubmitAction(
      actionConsts.ACTION_TYPE_LIST,
      {},
      this.namespaceValue,
    );
  }
  render() {
    const {
      currentAction,
      toggleTable,
      toggleForm,
      selectedObjects,
      pageTitleObject,
      enableSaveButtonValue,
    } = this.state;
    return (
      <Fragment>
        <Layout>
          <div className={styles.main}>
            <TitlePane
              currentAction={currentAction}
              formElementId={this.formElementIdValue}
              pageTitle={this.pageTitleValue}
              pageTitleTagline={this.pageTitleTaglineValue}
              clearFormFieds={this.clearFormFieds}
              selectedObjects={selectedObjects}
              pageTitleObject={pageTitleObject}
              handleSubmitAction={this.handleSubmitAction}
              toggleTableAndForm={this.toggleTableAndForm}
              toggleTableRowsSelected={this.toggleTableRowsSelected}
              setClick={click => (this.toggleButtons = click)}
              resetDropdownMenuButtons={this.resetDropdownMenuButtons}
              enableSaveButtonValue={enableSaveButtonValue}
            />
          </div>
          <Content className={styles.content}>
            <div hidden={toggleTable}>
              <AgreementsTable
                toggleView={this.toggleView}
                toggleEdit={this.toggleEdit}
                getSelectedIds={this.getSelectedIds}
                handleSubmitAction={this.handleSubmitAction}
                setClick={click => (this.toggleTableRowsSelected = click)}
                clearSelected={click =>
                  (this.toggleTableRowsSelectedClear = click)
                }
              />
            </div>
            <div hidden={toggleForm}>
              <AgreementsForm
                disabled={this.state.disabled}
                currentAction={currentAction}
                handleSubmitAction={this.handleSubmitAction}
                toggleSaveButtonEnable={this.toggleSaveButtonEnable}
                activeKey={this.state.activeKey}
                key={this.state.key}
                setClick={click => (this.clearFormFieds = click)}
                isExists={click => (this.isExistsFunc = click)}
              />
            </div>
          </Content>
        </Layout>
      </Fragment>
    );
  }
  handleSubmitAction = (actionType, dataForActionParam, nameSpaceParam) => {
    let nameSpace = this.namespaceValue;
    if (nameSpaceParam !== undefined) {
      nameSpace = nameSpaceParam;
    }
    let dataForAction = this.state.selectedIds || null;
    if (dataForActionParam !== undefined) {
      dataForAction = dataForActionParam;
    }
    if (actionType === actionConsts.ACTION_TYPE_MULTIPLE_SELECTION) {
      this.setState({
        selectedIds: dataForAction.selectedIds,
        selectedObjects: dataForAction.selectedName,
      });
    } else if (actionType === actionConsts.ACTION_TYPE_SINGLE_SELECTION) {
      const singleSelectedName = [];
      const pageTitleObject = [];
      singleSelectedName.push(dataForAction);
      pageTitleObject.push(dataForAction);
      dataForAction.dialogContent = dataForAction.name;
      const selectedName = {
        pageTitle: dataForAction.name,
        pageSubTitle: dataForAction.code,
        pageStatus: dataForAction.status,
        pageBlocked: dataForAction.blocked,
        tagLineOne: '',
        tagLineTwo: '',
      };
      this.setState(
        {
          selectedIds: dataForAction.id,
          selectedObjects: singleSelectedName,
          pageTitleObject: selectedName,
        },
        () =>
          submitAction(
            actionConsts.ACTION_TYPE_BYID,
            dataForAction.id,
            nameSpace,
            this.props,
          ),
      );
    } else if (actionType === actionConsts.ACTION_TYPE_DELETE_FROM_TABLE) {
      this.setState({ selectedIds: dataForAction }, () =>
        submitAction(
          actionConsts.ACTION_TYPE_DELETE,
          dataForAction.id,
          nameSpace,
          this.props,
          this.notificationTitle,
          this.toggleButtons,
        ),
      );
    } else if (actionType === actionConsts.ACTION_TYPE_ISEXISTS) {
      submitAction(
        actionType,
        dataForAction,
        nameSpace,
        this.props,
        this.notificationTitle,
        this.isExistsFunc,
      );
    } else {
      submitAction(
        actionType,
        dataForAction,
        nameSpace,
        this.props,
        this.notificationTitle,
        this.toggleButtons,
      );
      this.setState({ enableSaveButtonValue: true });
    }
  };
  toggleEdit = () => {
    this.setState({
      currentAction: actionConsts.ACTION_TYPE_EDIT,
      toggleTable: true,
      toggleForm: false,
    });
    this.toggleButtons(actionConsts.ACTION_TYPE_EDIT);
  };
  toggleView = () => {
    this.setState({
      currentAction: actionConsts.ACTION_TYPE_VIEW,
      disabled: false,
      activeKey: '1',
      key: '1',
      toggleTable: true,
      toggleForm: true,
    });
    this.toggleButtons(actionConsts.ACTION_TYPE_VIEW);
  };
  toggleTableAndForm = (
    callbackCurrentAction,
    callbackToggleTable,
    callbackToggleForm,
  ) => {
    this.setState({
      currentAction: callbackCurrentAction,
      toggleTable: callbackToggleTable,
      toggleForm: callbackToggleForm,
    });
    this.toggleTableRowsSelectedClear();
  };
  toggleView1 = () => {
    this.setState({
      currentAction: actionConsts.ACTION_TYPE_VIEW,
      toggleTable: true,
      toggleForm: false,
      disabled: false,
      disabled1: true,
      activeKey: '1',
    });
    this.toggleButtons(actionConsts.ACTION_TYPE_VIEW);
  };
  toggleSaveButtonEnable = saveValue => {
    this.setState({ enableSaveButtonValue: saveValue });
  };
  resetDropdownMenuButtons = () => {
    this.setState({
      selectedIds: [],
      selectedObjects: [],
    });
  };
}
export default Form.create()(
  connect(({ BillingAccount }) => ({ BillingAccount }))(BillingAccountView),
);
