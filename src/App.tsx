import React, { Component } from 'react';
import { Layout, Input, Button, Select, Form, Icon } from "antd";
import { Launcher } from "react-beautiful-chat";

import './App.css';

class App extends Component {
  state = {
    messageList: []
  };

  _onMessageWasSent(message: any) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _onKeyPress = (userInput: any) => {
  }

  _sendMessage(text: any) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  handleChange = (value: any) => {
    console.log(`selected ${value}`);
  }
  
  handleBlur = () => {
    console.log('blur');
  }
  
  handleFocus = () =>  {
    console.log('focus');
  }

  render() {
    return (
      <>
        
        <Layout 
          style={{ 
            height: '100vh', 
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Layout.Header 
            style={{ 
              backgroundColor: 'black', 
              textAlign: 'center', 
              marginBottom: '16px'
            }}
          >
            <h1 style={{ color: 'whitesmoke'}}>Magic Eight Ball</h1>
          </Layout.Header>
          <Layout.Content 
            style={{ 
              textAlign: 'center',
              paddingTop: '100px',
              paddingBottom: '100px'
            }}
          >
            <Form.Item>
              <Select
                showSearch
                size="large"
                style={{ width: '345px' }}
                placeholder="Seleccionar Lenguaje"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Select.Option value="ESP">Español</Select.Option>
                <Select.Option value="ENG">English</Select.Option>
              </Select>
              
            </Form.Item>
            <Form.Item>
            <Input 
              style={{
                maxWidth: '300px',
                marginRight: '5px',
              }}
              size="large"
              placeholder="Ask..."
            />
            <Button
              size="large"
              shape='circle'
              icon='question' 
            />
            </Form.Item>
            <Launcher
              agentProfile={{
                teamName: '8 ball',
                imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
              }}
              onMessageWasSent={this._onMessageWasSent.bind(this)}
              onKeyPress={this._onKeyPress}
              messageList={this.state.messageList}
              showEmoji={false}
              showFile={false}
            />
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            &copy; Magic Eight Ball
          </Layout.Footer>
        </Layout>
      </>  
    );
  }
}

export default App;



/**
 * 
 * <Layout 
        style={{ 
          height: '100vh', 
          display: "flex",
          flexDirection: "column"
        }}
      >
      
        <Layout.Header 
          style={{ 
            backgroundColor: 'black', 
            textAlign: 'center', 
            marginBottom: '16px'
          }}
        >
          <h1 style={{ color: 'whitesmoke'}}>Magic Eight Ball</h1>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px' }}>
          
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Layout.Content>
              <Input 
                size="large"
                placeholder="Ask..."

              />
              <Button shape="circle" icon="questions"/>
            </Layout.Content>
          </Layout>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          &copy; Magic Eight Ball
        </Layout.Footer>
      </Layout>
 */
