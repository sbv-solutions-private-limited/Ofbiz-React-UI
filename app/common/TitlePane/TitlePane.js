import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Badge, Row, Col } from 'antd';

import ActionButtonMenu from './ActionButtons';
import styles from './TitlePane.less';

const ButtonGroup = Button.Group;

class TitlePane extends React.PureComponent {
  componentDidMount() {
    console.log(this.props.setClick);
    this.props.setClick(this.toggleButtons);
  }

  render() {
    const {
      formElementId,
      currentAction,
      pageTitle,
      pageTitleTagline,
      clearFormFieds,
      selectedObjects,
      pageTitleObject,
      handleSubmitAction,
      toggleTableAndForm,
      toggleTableRowsSelected,
      resetDropdownMenuButtons,
      enableSaveButtonValue,
    } = this.props;
    let pageTitleValue = pageTitle;
    console.log(pageTitleObject);
    let pageSubTitleValue = '';
    let pageTitleTaglineValue = pageTitleTagline;
    let badgeType = styles.badgeSuccess;
   
    if (currentAction === 'close') {
      pageTitleValue = `${pageTitle}`;
    } else if (currentAction === 'new') {
      pageTitleTaglineValue = (
        <Fragment>
          <div>
            {pageTitleObject.tagLineOne}
            {pageTitleObject.tagLineTwo}
          </div>
        </Fragment>
      );
    } else if (currentAction === 'edit' || currentAction === 'view') {
      if (selectedObjects.blocked === true) {
        badgeType = styles.badgeError;
      } else if (selectedObjects.status === false) {
        badgeType = styles.badgeDefault;
      }
      pageTitleValue = `${pageTitleValue}`;

      console.log(pageTitleValue);
      pageSubTitleValue = `${pageTitleObject.pageSubTitle}`;

      pageTitleTaglineValue = (
        <Fragment>
          <div>
            <span>{pageTitleObject.tagLineOne}</span>
            <span>{pageTitleObject.tagLineTwo}</span>
          </div>
        </Fragment>
      );
    }

    return (
      <Row>
        <Col span={12} className={styles.column}>
          <div>
            <div className={styles.store}>
              {currentAction === 'close' ? (
                ''
              ) : (
                <Badge size="large" status="none" className={badgeType} />
              )}
              <span>
                <span>{pageTitleValue}</span>
                {currentAction !== 'close' ? (
                  ''
                ) : (
                  <span style={{ color: 'red', marginLeft: '4px' }}>
                    (List)
                  </span>
                )}
                {currentAction !== 'new' ? (
                  ''
                ) : (
                  <span style={{ color: 'green', marginLeft: '4px' }}>
                    (New)
                  </span>
                )}
                {currentAction !== 'edit' && currentAction !== 'view' ? (
                  ''
                ) : (
                  <span style={{ color: 'blue', marginLeft: '4px' }}>
                    <span>(Edit)</span>
                  </span>
                )}
              </span>
            </div>
            <div className={styles.material}>{pageTitleTaglineValue}</div>
          </div>
        </Col>
        
        {pageTitleValue != 'Reports' && pageTitleValue != 'Main' && pageTitleValue != 'Payment Gateway Config' &&<Col span={12} className={styles.menu}>
          <ButtonGroup>
            <ActionButtonMenu
              currentAction={currentAction}
              formElementId={formElementId}
              // eslint-disable-next-line no-return-assign
              setClick={click => (this.toggleButtons = click)}
              clearFormFieds={clearFormFieds}
              selectedObjects={selectedObjects}
              handleSubmitAction={handleSubmitAction}
              toggleTableAndForm={toggleTableAndForm}
              toggleTableRowsSelected={toggleTableRowsSelected}
              resetDropdownMenuButtons={resetDropdownMenuButtons}
              enableSaveButtonValue={enableSaveButtonValue}
            />
          </ButtonGroup>
        </Col>}
        {pageTitleValue == 'Payment Gateway Config' && <Col span={12} className={styles.menu}>
          <ButtonGroup>
            <ActionButtonMenu
              currentAction={currentAction}
              formElementId={formElementId}
              disabled = 'true'
              // eslint-disable-next-line no-return-assign
              setClick={click => (this.toggleButtons = click)}
              clearFormFieds={clearFormFieds}
              selectedObjects={selectedObjects}
              handleSubmitAction={handleSubmitAction}
              toggleTableAndForm={toggleTableAndForm}
              toggleTableRowsSelected={toggleTableRowsSelected}
              resetDropdownMenuButtons={resetDropdownMenuButtons}
              enableSaveButtonValue={enableSaveButtonValue}
            />
          </ButtonGroup>
        </Col>}
      </Row>
    );
  }
}

TitlePane.defaultProps = {};

TitlePane.propTypes = {
  setClick: PropTypes.func,
  formElementId: PropTypes.string,
  currentAction: PropTypes.string,
  pageTitle: PropTypes.string,
  pageTitleTagline: PropTypes.string,
  clearFormFieds: PropTypes.func,
  selectedObjects: PropTypes.any,
  pageTitleObject: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  toggleTableAndForm: PropTypes.func,
  toggleTableRowsSelected: PropTypes.func,
  resetDropdownMenuButtons: PropTypes.func,
  enableSaveButtonValue: PropTypes.any,
};

export default TitlePane;
