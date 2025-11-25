import React from 'react'
import { Button } from 'antd'

const CustomButton=({buttontext,classname,type,icons,onClick, style})=>{
  return (
      <Button
          className={ classname }
          icon={ icons }
          onClick={onClick}
          type={type}
          style={style}>
          { buttontext }

      </Button>
  )
}

export default CustomButton;