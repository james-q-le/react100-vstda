import React from 'react';

export default props => (
    <div className='container'>
        <div className='form-group row'>
            <div className='col-12'>
            <label className='font-weight-bold ml-4' for='editTextInput'>Description</label>
                <textarea className='update-todo-text' name='editTextInput' onChange={props.editInput}></textarea>
                <button className='update-todo btn btn-primary' onClick={props.saveEdit(props.test)}>Save</button>
            </div>
        </div>
        <div className='form-group row'>
            <div className='col-12'>
                <label className='font-weight-bold' for='updateBtn'>Priority</label>
                    <select className='update-todo-priority ml-2' name='editPriorityValue' type='select' onChange={props.editInput}>
                        <option value='0'>Select a Priority</option>
                        <option value='1'>High</option>
                        <option value='2'>Moderate</option>
                        <option value='3'>Low</option>
                    </select>
            </div>
        </div>
    </div>
)   
