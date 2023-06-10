import * as React from 'react';
import { Form, Input, Button, Label, List, Item } from './/RegisterForm.module';

export const RegisterForm = () => {
  return (
    <Form>
      <List>
        <Item>
          <Label>
            Username
            <Input />
          </Label>
        </Item>
        <Item>
          <Label>
            Email
            <Input />
          </Label>
        </Item>
        <Item>
          <Label>
            Password
            <Input />
          </Label>
        </Item>
      </List>

      <Button></Button>
    </Form>
  );
};
