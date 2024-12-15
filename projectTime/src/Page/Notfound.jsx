import React from 'react'

const Notfound = () => {
  const styles={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'40px',
    marginBottom:'40px',
    fontSize: '70px',
    fontWeight:'800'
  }
  const buttons ={
    display: 'inline-block',
    margin: '1px 4px 4px 0',
    height: '30px',
    lineHeight: '30px',
    padding: '0 15px',
    fontSize: '16px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#17181e'
  }

  const HandleBacktoHome=()=>{
    window.location.href="/"
  }
  return (
    <div style={{height: '40vh'}}> 
        <h1 style={styles}>  404 Notfound </h1>
        <button style={buttons} onClick={HandleBacktoHome}>GO BACK</button>
       </div>
  )
}

export default Notfound