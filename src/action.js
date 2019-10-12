export function Showselected(id) {
  return {
    type: 'selectedbook',
    id
  }
}
;

export function Addbook(booktitle, bookprice, bookauthor) {
  return {
    type: 'addbook',
    Task: booktitle,
    Allotedto: bookprice,
    date: bookauthor
  }
}
;


export function DeleteBook(id) {
  return {
    type: 'deletebook',
    id
  }
}
;

export function RemoveBook(id) {
  return {
    type: 'removebook',
    id
  }
};

export function Taskcompleted(id)
{
  return {
    type: 'taskcomplete',
    id
  }
}
export function Login(value) {
    return{
      type:'login',
      value
    }
}