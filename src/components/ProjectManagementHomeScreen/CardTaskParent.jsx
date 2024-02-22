import React from 'react';
import TextSubject from './TextSubject';
import IconExit from './IconExit';
import IconSave from './IconSave';
import CardTask from './CardTask';

const styles = {
  CardTaskParent: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 1.5)', // Add box shadow for elevation
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  contentContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  columnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
  },
  column: {
    flex: '1',
    marginRight: '20px',
  },
  fieldContainer: {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
  },
  textField: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  bigTextField: {
    width: '100%',
    height: '200px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

const CardTaskParent = () => {
  return (
    <div style={styles.CardTaskParent}>
      <CardTask>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={styles.headerContainer}>
            <TextSubject />
            <div>
              <IconExit />
              <IconSave />
            </div>
          </div>
          <div style={styles.contentContainer}>
            <div style={styles.columnsContainer}>
              <div style={styles.column}>
                <div style={styles.fieldContainer}>
                  <label style={styles.label}>Field 1:</label>
                  <input type="text" style={styles.textField} />
                </div>
                <div style={styles.fieldContainer}>
                  <label style={styles.label}>Field 2:</label>
                  <input type="text" style={styles.textField} />
                </div>
                <div style={styles.fieldContainer}>
                  <label style={styles.label}>Field 3:</label>
                  <input type="text" style={styles.textField} />
                </div>
                <div style={styles.fieldContainer}>
                  <label style={styles.label}>Field 4:</label>
                  <input type="text" style={styles.textField} />
                </div>
              </div>
              <div style={styles.column}>
                <div style={styles.fieldContainer}>
                  <label style={styles.label}>Field 5:</label>
                  <input type="text" style={styles.textField} />
                </div>
                <div style={styles.fieldContainer}>
                  <label style={styles.label}>Field 6:</label>
                  <input type="text" style={styles.textField} />
                </div>
              </div>
            </div>
            <div style={styles.fieldContainer}>
              <label style={styles.label}>Description:</label>
              <textarea style={styles.bigTextField}></textarea>
            </div>
          </div>
        </div>
      </CardTask>
    </div>
  );
};

export default CardTaskParent;

