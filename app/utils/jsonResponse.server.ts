import { json } from '@remix-run/server-runtime';
// format { code : number , msg:string , data?:objct }
/* code : msg
  0:    Success
  4000: Format error
  4001: Can’t find user
  4002: Password Error
  4003: User Existed
  4010: Invalid

  5001: Internal Server Error
  5002: Validation Fail.
*/
type ResponseType = {
  code?: number
  msg?: string
  data?: object
  init?: number | ResponseInit
}
export default function jsonResponse({
  code = 0,
  msg = '',
  data,
  init
}: ResponseType) {
  return json(
    {
      code,
      msg,
      data
    },
    init
  )
}

export function successResponse(o?: ResponseType) {
  return jsonResponse({ code: 0, msg: 'Success', ...o })
}

/*
状态码	名称	说明
400	Bad Request	表示其他错误，就是4xx都无法描述的前端发生的错误
401	Authentication	表示认证类型的错误
403	Authorization	表示授权的错误（认证和授权的区别在于：认证表示“识别前来访问的是谁”，而授权则是“赋予特定用户执行特定操作的权限”）
404	Not Found	表示访问的数据不存在
405	Method Not Allowd	表示可以访问接口，但是使用的HTTP方法不允许
406	Not Acceptable	表示API不支持前端指定的数据格式
408	Request Timeout	表示前端发送的请求到服务器所需的时间太长
409	Confilct	表示资源发生了冲突，比如使用已被注册邮箱地址注册时，就引起冲突
410	Gone	表示访问的资源不存在。不单表示资源不存在，还进一步告知该资源该资源曾经存在但目前已消失
413	Request Entity Too Large	表示请求的消息体过长而引发的错误
414	Request-URI Too Large	表示请求的首部过长而引发的错误
415	Unsupported Media Type	表示服务器端不支持客户端请求首部Content-Type里指定的数据格式
416	Range Not Satisfiable	表示无法提供Range请求中的指定的那段包体
417	Expectation Failed	表示对于Expect请求头部期待的情况无法满足时的响应码
421	Misdirected Request	表示服务器认为这个请求不该发给它，因为它没能力处理
426	Upgrade Required	表示服务器拒绝基于当前HTTP协议提供服务，通过Upgrade头部告知客户端必须升级协议才能继续处理
428	Precondition Required	表示用户请求中缺失了条件类头部，例如If-Match
429	Too Many Requests	表示客户端发送请求的速率过快
431	Request Header Fields Too Large	表示请求的HEADER头部大小超出限制
451	Unavailable For Legal Reasons	表示由于法律原因不可访问
5xx-服务器端发生错误
5xx状态码表示错误由服务器端的问题引发的。

状态码	名称	说明
500	Internal Server Error	表示服务器内部错误，且不属于以下错误类型
501	Not Implemented	表示服务器不支持实现请求所需要的功能
502	Bad Gateway	代理服务器无法获取到合法资源
503	Service Unavailable	服务器资源尚未准备好处理当前请求
504	Gateway Timeout	表示代理服务器无法及时的从上游获得响应
505	HTTP Verson Not Supported	表示请求使用的HTTP协议版本不支持
507	Insufficient Storage	表示服务器没有足够的空间处理请求
508	Loop Detected	表示访问资源时检测到循环
511	Network Authentication Required	表示代理服务器发现客户端需要进行身份验证才能获得网络访问权限
*/