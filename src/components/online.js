import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  const { data, error } = useSWR(
    `https://${server}/status/server`,
    fetcher
  );

  //console.log("tes", data);
  if(server == "s1"){
    server = "1.casks.me"
  } else if(server == "s2"){
    server = "2.casks.me"
  } else if(server == "s3"){
    server = "yuanshen2.fvck.top:19999"
  }

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
        <div class="stat-desc">currently online</div>
      </div>

  );
}
