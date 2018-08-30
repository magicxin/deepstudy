function getChildById(id, arr, check) {
  if(!arr[id]) {
    return 
  } else {
    for(let t of arr[id]) {
      getChildById(t.dept,arr)
      console.log(check)
      check.push(t)
    }
  }
}

function sortById(arr) {
  let items = {};
  for(let i = 0; i < arr.length; i++) {
    let key = arr[i].parentId;
    if(!items[key]) {
      items[key] = []
    }
    items[key].push(arr[i]);
  }
  return items
}
export default {
  sortById: sortById,
  getChildById: getChildById
}