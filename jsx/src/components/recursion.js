let check = []
function getChildById(id, arr) {
  if(!arr[id]) {
    return 
  } else {
    for(let t of arr[id]) {
      getChildById(t.dept,arr)
      check.push(t)
    }
  }
  return check
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