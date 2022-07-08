import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  var host;
  if(server == "天理一服"){
    host = "1.casks.me"
  } else if(server == "天理二服"){
    host = "2.casks.me"
  } else if(server == "天理魂服"){
    host = "soul.casks.me"
  }
  
  const { data, error } = useSWR(
    `https://${host}/status/server`,
    fetcher
  );

  console.log("tes", data);

  var online = "?";
  if(data){
    if(data.status){
      if(data.status.playerCount){
        online = data.status.playerCount;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">在线人数</div>
      </div>

  );
}
