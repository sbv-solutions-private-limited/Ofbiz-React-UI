import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Layout, Form } from 'antd';
import TitlePane from '../../../common/TitlePane/TitlePane';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import ReportsTable from './MainTable';
import * as localConsts from './MainConsts';
import styles from '../../../common/Styles.less';

const { Content } = Layout;

class MainView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: actionConsts.ACTION_TYPE_CLOSE,
      toggleTable: false,
      selectedIds: [],
      selectedObjects: [],
      pageTitleObject: [],
      enableSaveButtonValue: true,
    };
  }

  namespaceValue = localConsts.NAMESPACE;
  pageTitleValue = localConsts.PAGE_TITLE;
  pageTitleTaglineValue = localConsts.PAGE_TITLE_TAGLINE;
  formElementIdValue = localConsts.FORM_ID;
  notificationTitle = localConsts.NOTIFICATION_TITLE;

  render() {
    const {
      currentAction,
      toggleTable,
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
              toggleTableAndForm={this.toggleTableAndForm}
              toggleTableRowsSelected={this.toggleTableRowsSelected}
              setClick={click => (this.toggleButtons = click)}
              resetDropdownMenuButtons={this.resetDropdownMenuButtons}
              enableSaveButtonValue={enableSaveButtonValue}
            />
          </div>
          <Content className={styles.content}>
            <div hidden={toggleTable}>
              <ReportsTable
                toggleView={this.toggleView}
                toggleEdit={this.toggleEdit}
                getSelectedIds={this.getSelectedIds}
                setClick={click => (this.toggleTableRowsSelected = click)}
                clearSelected={click =>
                  (this.toggleTableRowsSelectedClear = click)
                }
              />
            </div>
          </Content>
        </Layout>
      </Fragment>
    );
  }

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
      toggleTable: true,
      toggleForm: false,
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
  connect(({ }) => ({}))(MainView),
);
