export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  var serName;
  if(server == "s1"){
      serName = "透明肝服服务器一在线人数:"
      host = "s1.yuanshen.edu.rs"
      seraddress = "电脑：server1.yuanshen.edu.rs"
  } else if(server == "s2"){
      serName = "透明肝服服务器一在线人数:"
      host = "s2.yuanshen.edu.rs"
      seraddress = "电脑：server1.yuanshen.edu.rs"  
  } 

  

  function setStatus() {
    var online;
    var memoryUsage;
    var url = `https://${host}/status/server`; 
    console.log("url", url);
    memoryUsage = ""

    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data){
        if(data.status){
          if(typeof data.status.playerCount !== "undefined"){
            online = data.status.playerCount;
          }

          if(typeof data.status.memoryUsage !== "undefined"){
            memoryUsage = "内存占用：" + data.status.memoryUsage;
          }
        }
      }
      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_memoryUsage").innerText = mem;
    })
    .catch(error => {
      console.error('Error:', error);
      online = "获取失败";

      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_memoryUsage").innerText = mem;
    });
  }

  setStatus();
  setInterval(setStatus, 5000);
  
  return (

      <div class="stat">
        <div class="stat-title">{serName}</div>
        <div class="stat-value" id={server + "_online"}></div>
        <div class="stat-title" id={server + "_memoryUsage"}></div>
        <div class="stat-desc">{seraddress}</div>

      </div>

  );
}
