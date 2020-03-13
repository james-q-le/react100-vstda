import React from 'react';

export default props => (
    <div className='form-group row border-bottom border-light'>
      <div className='col-1 pl-1'>
        <input type='checkbox'></input>
      </div>
      <div className='col-9 px-0'>
        <ul className='pl-0'>
          <li className='success' style={{listStyleType: 'none'}}>{props.text}</li>
        </ul>
      </div>
      <div className='col-2 p-0'>
        <a className='edit-todo fa fa-pencil pl-1' onClick={props.editClick(props.text)}></a>
        <a className='delete-todo fa fa-trash pl-2' onClick={props.deleteClick(props.text)}></a>
      </div>
    </div>
) 