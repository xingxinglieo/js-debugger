import notFindCSS from '~/styles/404.css'
import notFindCloudImg from '~/assets/404_images/404_cloud.png'
import notFindImg from '~/assets/404_images/404.png'
export function links() {
  return [{ rel: 'stylesheet', href: notFindCSS }]
}
export default function NotFind() {
  return (
    <div className='wscn-http404-container'>
      <div className='wscn-http404'>
        <div className='pic-404'>
          <img className='pic-404__parent' src={notFindImg} alt='404' />
          <img
            className='pic-404__child left'
            src={notFindCloudImg}
            alt='404'
          />
          <img className='pic-404__child mid' src={notFindCloudImg} alt='404' />
          <img
            className='pic-404__child right'
            src={notFindCloudImg}
            alt='404'
          />
        </div>
        <div className='bullshit'>
          <div className='bullshit__oops'>出错了!</div>
          <div className='bullshit__info' />
          <div className='bullshit__headline'>此页面不存在或被禁止访问...</div>
          <div className='bullshit__info'>请检查您输入的地址是否正确</div>
          {/* <div class="bullshit__info">点击下方回到上一页或首页</div> */}
          {/* <a class="bullshit__return-home mr-2" onClick="$router.go(-1)">回到上一页</a> */}
          {/* <a href="" class="bullshit__return-home">刷新至首页</a> */}
        </div>
      </div>
    </div>
  )
}
