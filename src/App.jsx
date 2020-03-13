import React, { Component } from 'react';
import TodoList from './todolist';
import EditMode from './editmode';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editTextInput:null,
      addTextInput: null,
      priorityValue: null,
      editPriorityValue:null,
      highPriorityText: [],
      moderatePriorityText: [],
      lowPriorityText: [],
      welcomeText: 'Welcome to Very Simple Todo App! Get started by adding a new todo and selecting the priority level of the task!'
    }
    this.textInput = this.textInput.bind(this);
    this.textAdd = this.textAdd.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this);
    this.editHigh = this.editHigh.bind(this);
    this.saveHigh = this.saveHigh.bind(this);
    this.editMod = this.editMod.bind(this);
    this.saveMod = this.saveMod.bind(this);
    this.editLow = this.editLow.bind(this);
    this.saveLow = this.saveLow.bind(this);
  }

  textInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  textAdd(priority, textbox) {
    return() => {
      let newHigh = this.state.highPriorityText;
      let newModerate = this.state.moderatePriorityText;
      let newLow = this.state.lowPriorityText;
      if (priority == 1) {
        newHigh.push(textbox);
        this.setState({
          highPriorityText: newHigh
        })
      } else if (priority == 2) {
        newModerate.push(textbox);
        this.setState({
          moderatePriorityText: newModerate
        })
      } else if (priority == 3) {
        newLow.push(textbox);
      this.setState({
        lowPriorityText: newLow
      })
    }
    }
  }

  deleteBtn(key) {
    return() => {
    for (let i = 0; i < this.state.highPriorityText.length; i++) {
      if (key === this.state.highPriorityText[i]) {
        let updatedList = this.state.highPriorityText.filter(item => item !== key);
        this.setState({highPriorityText: updatedList})
      }
    }
    for (let i = 0; i < this.state.moderatePriorityText.length; i++) {
      if (key === this.state.moderatePriorityText[i]) {
        let updatedList = this.state.moderatePriorityText.filter(item => item !== key);
        this.setState({moderatePriorityText: updatedList})
      }
    }
    for (let i = 0; i < this.state.lowPriorityText.length; i++) {
      if (key === this.state.lowPriorityText[i]) {
        let updatedList = this.state.lowPriorityText.filter(item => item !== key);
        this.setState({lowPriorityText: updatedList})
      }
    }
    }
  }

  editHigh(key) {
    return() => {
      let listHigh = this.state.highPriorityText;
      for(let i = 0; i < listHigh.length; i++) {
        if(listHigh[i] === key) {
          listHigh.splice(i, 1, <EditMode saveEdit={this.saveHigh} test={<EditMode/>} editInput={this.textInput}/>);
        }
      }
      this.setState({highPriorityText: listHigh});
    }
  }
  editMod(key) {
    return() => {
      let listMod = this.state.moderatePriorityText;
      for(let i = 0; i < listMod.length; i++) {
        if(listMod[i] === key) {
          listMod.splice(i, 1, <EditMode saveEdit={this.saveMod} test={<EditMode/>} editInput={this.textInput}/>);
        }
      }
      this.setState({moderatePriorityText: listMod});
    }
  }
  editLow(key) {
    return() => {
      let listLow = this.state.lowPriorityText;
      for(let i = 0; i < listLow.length; i++) {
        if(listLow[i] === key) {
          listLow.splice(i, 1, <EditMode saveEdit={this.saveLow} test={<EditMode/>} editInput={this.textInput}/>);
        }
      }
      this.setState({lowPriorityText: listLow});
    }
  }

  saveHigh(key) {
    let highEditHigh = this.state.highPriorityText;
    let highEditMod = this.state.moderatePriorityText;
    let highEditLow = this.state.lowPriorityText;
    return () => {
      if (this.state.editPriorityValue == 1) {
        for(let i = 0; i < highEditHigh.length; i++) {
          if(typeof(highEditHigh[i]) === typeof(key)) {
            highEditHigh.splice(i, 1, this.state.editTextInput)
            this.setState({highPriorityText: highEditHigh}) 
          }
        } 
      } else if (this.state.editPriorityValue == 2) {
          for(let i = 0; i < highEditHigh.length; i++) {
            if(typeof(highEditHigh[i]) === typeof(key)) {
              highEditHigh.splice(i, 1)
              highEditMod.push(this.state.editTextInput)
              this.setState({moderatePriorityText: highEditMod})
          }
        }
      } else if(this.state.editPriorityValue == 3) {
          for(let i = 0; i < highEditHigh.length; i++) {
            if(typeof(highEditHigh[i]) === typeof(key)) {
              highEditHigh.splice(i, 1)
              highEditLow.push(this.state.editTextInput)
              this.setState({lowPriorityText: highEditLow})
          }
        }
      } else {
        for(let i = 0; i < highEditHigh.length; i++) {
          if(typeof(highEditHigh[i]) === typeof(key)) {
            highEditHigh.splice(i, 1, this.state.editTextInput)
            this.setState({highPriorityText: highEditHigh}) 
          }
        } 
      }  
    }
  }

  saveMod(key) {
    let modEditHigh = this.state.highPriorityText;
    let modEditMod = this.state.moderatePriorityText;
    let modEditLow = this.state.lowPriorityText;
    return () => {
      if (this.state.editPriorityValue == 1) {
        for(let i = 0; i < modEditMod.length; i++) {
          if(typeof(modEditMod[i]) === typeof(key)) {
            modEditMod.splice(i, 1)
            modEditHigh.push(this.state.editTextInput)
            this.setState({highPriorityText: modEditHigh}) 
          }
        } 
      } else if (this.state.editPriorityValue == 2) {
          for(let i = 0; i < modEditMod.length; i++) {
            if(typeof(modEditMod[i]) === typeof(key)) {
              modEditMod.splice(i, 1, this.state.editTextInput)
              this.setState({moderatePriorityText: modEditMod})
            }
          }
      } else if(this.state.editPriorityValue == 3) {
          for(let i = 0; i < modEditMod.length; i++) {
            if(typeof(modEditMod[i]) === typeof(key)) {
              modEditMod.splice(i, 1)
              modEditLow.push(this.state.editTextInput)
              this.setState({lowPriorityText: modEditLow})
            }
          }
      } else {
        for(let i = 0; i < modEditMod.length; i++) {
          if(typeof(modEditMod[i]) === typeof(key)) {
            modEditMod.splice(i, 1, this.state.editTextInput)
            this.setState({moderatePriorityText: modEditMod})
          }
        }
      } 
    }
  }

  saveLow(key) {
    let lowEditHigh = this.state.highPriorityText;
    let lowEditMod = this.state.moderatePriorityText;
    let lowEditLow = this.state.lowPriorityText;
    return () => {
      if (this.state.editPriorityValue == 1) {
        for(let i = 0; i < lowEditLow.length; i++) {
          if(typeof(lowEditLow[i]) === typeof(key)) {
            lowEditLow.splice(i, 1)
            lowEditHigh.push(this.state.editTextInput)
            this.setState({highPriorityText: lowEditHigh}) 
          }
        } 
      } else if (this.state.editPriorityValue == 2) {
          for(let i = 0; i < lowEditLow.length; i++) {
            if(typeof(lowEditLow[i]) === typeof(key)) {
              lowEditLow.splice(i, 1)
              lowEditMod.push(this.state.editTextInput)
              this.setState({moderatePriorityText: lowEditMod})
          }
        }
      } else if(this.state.editPriorityValue == 3) {
          for(let i = 0; i < lowEditLow.length; i++) {
            if(typeof(lowEditLow[i]) === typeof(key)) {
              lowEditLow.splice(i, 1, this.state.editTextInput)
              this.setState({lowPriorityText: lowEditLow})
            }
          }
      } else {
          for(let i = 0; i < lowEditLow.length; i++) {
            if(typeof(lowEditLow[i]) === typeof(key)) {
              lowEditLow.splice(i, 1, this.state.editTextInput)
              this.setState({lowPriorityText: lowEditLow})
          }
        }
      } 
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='border-bottom border-white mb-4'>
            <h1 className='text-white pb-2 pt-2'>Very Simple Todo App</h1>
        </div>
        <div className='form-group row'>
          <div className='col-12'>
            <div className='card'>
              <h6 className='card-header'>Add New Todo</h6>
              <div className='card-body pb-1'>
                <div className='card-text'>
                  <label className='font-weight-bold' for='addTextInput'>I want to..</label>
                </div>
                <div className='card-text'>
                  <textarea className='create-todo-text w-100 p-0 mb-2' name='addTextInput' onChange={this.textInput} defaultValue={this.state.welcomeText}></textarea>
                </div>
                <div className='form-group row'>
                  <div className='col-4'>
                    <div className='card-text'>
                      <label className='font-weight-bold' for='priorityList'>How much of a priority is this?</label> 
                    </div>
                    <div className='card-text'>
                      <select className='create-todo-priority' name='priorityValue' onChange={this.textInput}>
                        <option value='0'>Select a Priority</option>
                        <option value='1'>High</option>
                        <option value='2'>Moderate</option>
                        <option value='3'>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-8'>
                    <div className='card-text'>
                      <button className='create-todo btn btn-primary w-100 mt-3' onClick={this.textAdd(this.state.priorityValue, this.state.addTextInput)}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='form-group row'>
            <div className='col-4'>
              <div className='card'>
                <h6 className='card-header' style={{ backgroundColor:'tomato' }}>High</h6>
                <div className='card-body'>
                  {
                    this.state.highPriorityText.map(itemHigh => (
                      <TodoList
                        key={itemHigh}
                        text={itemHigh}
                        deleteClick={this.deleteBtn}
                        editClick={this.editHigh}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card'>
                <h6 className='card-header' style={{ backgroundColor:'lightyellow'}}>Moderate</h6>
                <div className='card-body'>
                {
                    this.state.moderatePriorityText.map(itemMod => (
                      <TodoList
                        key={itemMod}
                        text={itemMod}
                        deleteClick={this.deleteBtn}
                        editClick={this.editMod}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card'>
                <h6 className='card-header' style={{ backgroundColor:'lightgreen' }}>Low</h6>
                <div className='card-body'>
                {
                    this.state.lowPriorityText.map(itemLow => (
                      <TodoList
                        key={itemLow}
                        text={itemLow}
                        deleteClick={this.deleteBtn}
                        editClick={this.editLow}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
