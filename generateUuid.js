module.exports={
  //length可控制字节长度
  generateUuid: function (length=10){
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
  }
  //1、随机数长度控制,定义一个长度变量（length），生成可控长度的随机数：
// Math.random().toString(36).substr(3,length)

// 2、引入时间戳：

// Date.now().toString(36)
}

