process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
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
    var mem;
    var playerCountUrl = `https://${host}/status/playerCount`; 
    var memUrl = `https://${host}/status/memoryUsage`; 
    mem = ""

    fetch(playerCountUrl)
    .then(res => res.json())
    .then(data => {
      online = data;
      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_memoryUsage").innerText = mem;})
    .catch(error => {
      console.error('Error:', error);
      online = "获取失败";

      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_memoryUsage").innerText = mem;
    });
    fetch(memUrl)
    .then(res => res.json())
    .then(data => {
      mem = `当前服务器内存使用率：${data}%`;
      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_memoryUsage").innerText = mem;})
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
