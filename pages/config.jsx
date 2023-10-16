import { Button, Input } from 'antd';
import React, {ReactNode} from 'react';


// import { createClient } from '@vercel/edge-config';

import { kv } from '@vercel/kv';

console.log('process',process.env.KV_REST_API_URL)


import { NextResponse } from 'next/server';

// const obj = createClient({
//   url: 'https://blessed-grubworm-41727.kv.vercel-storage.com',
//   token: 'AaL_ASQgOGE2ZGYxZGItMTY4Zi00ZWVjLTk3MTktNGZhMWE2NjQ5NDZjYmY4YzkzMzA1YzI0NGQ0NWFmNDRjN2JhZjQ2NzY5N2U='
// })
 
export async function GET() {
  const user = await kv.hgetall('user:me');
  console.log('user', user)
  return NextResponse.json(user);
}

// const firstConfig = createClient('https://edge-config.vercel.com/ecfg_eihwitam7uexo16cowfwwaz42asf?token=db71d06f-73ae-47b0-b6fd-f9e37ca2ef8d');
 

class ConfigPage extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      inputKey: undefined,
      inputValue: undefined,
      getValue: undefined,
      loading: false
    }
  }
  test = async () => {
    this.setState({
      loading: true
    })
    // await fetch(`https://blessed-grubworm-41727.kv.vercel-storage.com/`, {
    //   headers: {
    //     Authorization: `Bearer AaL_ASQgOGE2ZGYxZGItMTY4Zi00ZWVjLTk3MTktNGZhMWE2NjQ5NDZjYmY4YzkzMzA1YzI0NGQ0NWFmNDRjN2JhZjQ2NzY5N2U=`,
    //   },
    //   body: '["HSET", "sessionData","user", "liuling"]',
    //   method: 'POST',
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

      await fetch(`${process.env.KV_REST_API_URL}/set/${this.state.inputKey}/${this.state.inputValue}`, {
  headers: {
    Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    this.setState({
      loading: false
    })
  });
    // const firstExampleValue1 = await firstConfig.get('test');
    // console.log('configItems', firstExampleValue1)
    // await axios.get('/welcome').then(res => {
    //   console.log(res)
    // })
    fetch(`${process.env.KV_REST_API_URL}/`, {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
      body: `["GET", "${this.state.inputKey}"]`,
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          getValue: data.result
        })
      });
  }

  getValue = ()=> {
    fetch(`https://blessed-grubworm-41727.kv.vercel-storage.com/`, {
      headers: {
        Authorization: `Bearer AaL_ASQgOGE2ZGYxZGItMTY4Zi00ZWVjLTk3MTktNGZhMWE2NjQ5NDZjYmY4YzkzMzA1YzI0NGQ0NWFmNDRjN2JhZjQ2NzY5N2U=`,
      },
      body: `["GET", "${this.state.inputKey}"]`,
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          getValue: data.result
        })
      });
  }

  render() {
    return (
      <div className='config-page'>
        <div>
        <Input placeholder='key' value={this.state.inputKey} onChange={e=>this.setState({inputKey:e.target.value})} style={{width: '200px'}}/>
        </div>
        <div>
        <Input placeholder='value' value={this.state.inputValue} onChange={e=>this.setState({inputValue:e.target.value})} style={{margin: '10px 0', width: '200px'}} />
        </div>
        <Button loading={this.state.loading} type="primary" onClick={this.test} >Add</Button>
        <Button style={{marginLeft: '10px'}} type="primary" onClick={this.getValue} >Get Value</Button>
        {
          this.state.getValue && this.state.inputValue ? <div>成功写入: {this.state.getValue}</div> : null
        }
        {
          this.state.getValue && !this.state.inputValue ? <div>读取到: {this.state.getValue}</div> : null
        }

      </div>
    )
  }
}
export default ConfigPage