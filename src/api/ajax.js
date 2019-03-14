/**
  封装ajax请求函数
  返回值：promise对象（异步返回的数据是：response.data）  
**/

import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {


    return new Promise(function(resolve, reject) {
        //执行异步ajax请求
        let promise
        if (type === 'GET') {
            //拼接请求字符串
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&"
            })
            if (dataStr !== '') {
                //去掉dataStr最后的&符号
                dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"))
                    //拼接url
                url = url + '?' + dataStr
            }
            //发送aiax请求
            promise = axios.get(rul)
        } else {
            promise = axios.post(url)
        }
        promise.then(function(response) {
            //成功了返回promise对象
            resolve(response.data)
        }).catch(function(error) {
            //失败了返回失败信息
            reject(error)
        })
    })
}