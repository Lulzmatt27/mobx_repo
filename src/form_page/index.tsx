import React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components';

const Form = styled.form`
  margin: 15px;
  padding: 5px;
`;
const Wrapper = styled.div`
  display: grid;
`;
const Input = styled.input`
  padding: 4px;
`;
const Row = styled.div`
  width: 100%;
  display: block;
`;
const Label = styled.label`
  color: gray;`;
const Button = styled.button`
  padding: 4px;
  background-color: lightgray;`
const SimpleForm:React.FunctionComponent = () =>{
  return (
    <Wrapper>
      <Form>
        <Row>
        <Label>name</Label>
        <Input/>
        </Row>
        <Row>
        <Label>company</Label>
        <Input/>
        </Row>
        <Button>Send form</Button>
      </Form>
    </Wrapper>
  )
}

export default observer(SimpleForm);