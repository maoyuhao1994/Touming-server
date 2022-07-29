import useSWR from 'swr'
import styles from './layout.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  if(server == "天理2.8一服"){
        host = "1.casks.me"
        seraddress = "电脑：1.casks.me 手机：https://1.casks.me"
  } else if(server == "天理2.8二服"){
        host = "28.casks.me"
        seraddress = "电脑：28.casks.me 手机：https://28.casks.me"
  } else if(server == "天理2.8魂服"){
        host = "soul.casks.me"
        seraddress = "电脑：soul.casks.me 手机：https://soul.casks.me"
  } else if(server == "天理2.8.5x服"){
           host = "285.casks.me:22100"
           seraddress = "电脑：285.casks.me:22100 手机暂不支持"
  } else if(server == "天理2.7版本服"){
        host = "2.casks.me"
        seraddress = "电脑：27.casks.me 手机：https://27.casks.me"
  }

  const { data, error } = useSWR(
    `https://${host}/status/server`,
    fetcher
  );

  

  var online = "连接失败";
  function setOnline() {
    console.log("host", host);
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data){
        if(data.status){
          if(typeof data.status.playerCount !== "undefined"){
            online = data.status.playerCount;
          }
        }
      }
      console.log("online", online);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // const { data, error } = useSWR(
    //   `https://${host}/status/server`,
    //   fetcher
    // );
    // console.log("tes", data);

    // if(data){
    //   if(data.status){
    //     if(typeof data.status.playerCount !== "undefined"){
    //       online = data.status.playerCount;
    //     }
    //   }
    // }
    // console.log("online", online);
  }

  setInterval(setOnline, 3000);

  var mem = "不支持显示";
  if(data){
    if(data.status){
      if(data.status.mem){
        mem = data.status.mem;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">服务器正常，检测坏了|在线人数</div>
        <div class="stat-desc">{seraddress}</div>
        <div class="stat-desc">内存占用：{mem}</div>
      </div>

  );
}
