export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  var serName;
  if(server == "s1"){
        serName = "天理2.8一服"
        host = "1.casks.me"
        seraddress = "电脑：1.casks.me 手机：https://1.casks.me"
  } else if(server == "s2"){
        serName = "天理2.8二服"
        host = "28.casks.me"
        seraddress = "电脑：28.casks.me 手机：https://28.casks.me"
  } else if(server == "s3"){
        serName = "天理2.8魂服"
        host = "soul.casks.me"
        seraddress = "电脑：soul.casks.me 手机：https://soul.casks.me"
  } else if(server == "s4"){
           serName = "天理2.8.5x服"
           host = "285.casks.me:22100"
           seraddress = "电脑：285.casks.me:22100 手机暂不支持"
  } else if(server == "s5"){
        serName = "天理2.7版本服"
        host = "2.casks.me"
        seraddress = "电脑：27.casks.me 手机：https://27.casks.me"
  }

  

  function setStatus() {
    var online;
    var mem;
    var url = `https://${host}/status/server`; 
    console.log("url", url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data){
        if(data.status){
          if(typeof data.status.playerCount !== "undefined"){
            online = data.status.playerCount;
          }

          if(typeof data.status.mem !== "undefined"){
            mem = "内存占用：" + data.status.mem;
          }
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
      online = "连接失败";
      mem = "不支持显示";
    });

    document.getElementById(server + "_online").innerText = online;
    document.getElementById(server + "_mem").innerText = mem;
  }

  setStatus();
  setInterval(setStatus, 3000);
  
  return (

      <div class="stat">
        <div class="stat-title">{serName}</div>
        <div class="stat-value" id={server + "_online"}></div>
        <div class="stat-desc">服务器正常，检测坏了|在线人数</div>
        <div class="stat-desc">{seraddress}</div>
        <div class="stat-desc" id={server + "_mem"}></div>
      </div>

  );
}
