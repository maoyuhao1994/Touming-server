export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  var serName;
  if(server == "s1"){
        serName = "天理2.8指令一服在线人数:"
        host = "1.casks.me"
        seraddress = "电脑：1.casks.me 手机：https://1.casks.me"
  } else if(server == "s2"){
        serName = "天理2.8指令二服在线人数:"
        host = "28.casks.me"
        seraddress = "电脑：28.casks.me 手机：https://28.casks.me"
  } else if(server == "s3"){
        serName = "天理2.8魂服（无指令）在线人数:"
        host = "soul.casks.me"
        seraddress = "电脑：soul.casks.me 手机：https://soul.casks.me"
  } else if(server == "s4"){
           serName = "天理2.8.5x指令/无派蒙服在线人数:"
           host = "285.casks.me:22007"
           seraddress = "电脑：285.casks.me:22100 手机暂不支持"
  } else if(server == "s5"){
        serName = "天理2.7指令版本服在线人数:"
        host = "2.casks.me"
        seraddress = "电脑：27.casks.me 手机：https://27.casks.me"
  } else if(server == "s6"){
    serName = "天理星穹铁道服在线人数:"
    host = "40.81.24.12"
    seraddress = "40.81.24.12"
}

  

  function setStatus() {
    var online;
    var mem;
    var url = `https://${host}/status/server`; 
    console.log("url", url);
    mem = ""

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
      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_mem").innerText = mem;
    })
    .catch(error => {
      console.error('Error:', error);
      online = "连接失败";

      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_mem").innerText = mem;
    });
  }

  setStatus();
  setInterval(setStatus, 3000);
  
  return (

      <div class="stat">
        <div class="stat-title">{serName}</div>
        <div class="stat-value" id={server + "_online"}></div>
        <div class="stat-title" id={server + "_mem"}></div>
        <div class="stat-desc">{seraddress}</div>

      </div>

  );
}
