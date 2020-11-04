import {makeAutoObservable} from 'mobx';
import {FormState, FieldState} from 'formstate';
class Form{
  constructor(){
    makeAutoObservable(this);
  }
  FormPage = new FormState({
    name: new FieldState(''),
    company: new FieldState('')
  });

  

}

export default Form;