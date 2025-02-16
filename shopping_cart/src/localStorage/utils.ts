
export function setToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getFromLocalStorage(key: string) {
  const data = JSON.parse(localStorage.getItem(key));
  if(data){
    return data;
  } else{
    return []
  }
}