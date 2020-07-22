export const fetchWithCORSHeader = (url) => {
    const data = fetch(url, {
        mode: "cors",
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
        }}).then(response=>response.json())
    return data
}

export const chartDataGenerator = (data, metric1, metric2) => {
    let Metric1List = Object.keys(data);
    let Metric2List = Object.values(data);
    if (Metric1List.length === Metric2List.length) {
      let chartData = [];
      for (let i = 0; i < Metric1List.length; i++) {
        chartData.push({ [metric1]: Metric1List[i], [metric2]: Metric2List[i] });
      }
      return chartData;
    } else {
      console.error("data does not match");
      return false;
    }
  };

export const UIwrapper = sizeList => sizeList.map( s => {
   if(s.Size==="small_size")
   return {Size:'[0,50)', Boatramp: s.Boatramp}
   else if(s.Size==='medium_size')
   return {Size: '[50,200)', Boatramp: s.Boatramp}
   else if(s.Size ==='large_size')
   return {Size: '[200,526)', Boatramp: s.Boatramp}
 });