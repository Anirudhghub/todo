const start_State = [
  {
    Task: 'Bulk Emailing',
    date: '2019-2-3',
    Allotedto: 'Sankesh',
    id: 1,
    display:false,
    flag: false
  },
  {
    Task: 'UI Design Submission',
    date: '2019-13-3',
    Allotedto: 'Rajesh',
    id: 2,
    display:false,
    flag: false
  }, {
    Task: 'Sales',
    date: '2019-1-1',
    Allotedto: 'Alex',
    id: 3,
    display:false,
    flag: false
  },
  {
    Task: 'Code Verification',
    date: '2019-12-10',
    Allotedto: 'Dev',
    id: 4,
    display:false,
    flag: false
  }, {
    Task: 'Client Meeting',
    date: '2019-3-5',
    Allotedto: 'Rudraksh',
    id: 5,
    display:false,
    flag: false
  }, {
    Task: 'Friday Activities',
    date: '2019-4-6',
    Allotedto: 'HR',
    id: 6,
    display:false,
    flag: false
  },
    {page:''},
    {
      usersdata:{username:'anirudh',password:'pass'}
    }
];

export default function red(state = start_State, action) {
  switch (action.type) {
    case 'selectedbook':
      let rawdata = [...state];
      rawdata.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.flag);
          element.display = true;
          console.log(element.flag);
        }
      })
      return rawdata;

    case 'addbook':
      console.log(action);
      return [...state, {
        Task: action.Task,
        Allotedto: action.Allotedto,
        date: action.date,
        id: parseInt(Math.random() * 100),
        display:false,
        flag: false
      }]

    case 'deletebook':
      let filtered = [...state];
      filtered = filtered.filter(function(value) {
        return value.id !== action.id;
      });
      return filtered;

    case 'removebook':
      let rawdata1 = [...state];
      rawdata1.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.display);
          element.display = false;
          console.log(element.display);
        }
      })
      return rawdata1;

      case 'taskcomplete':
      let rawdata2 = [...state];
      rawdata2.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.flag);
          element.flag = true;
          console.log(element.flag);
        }
      })
      return rawdata2;
      case 'login':
        let rawdata3=[...state];
        rawdata3.map((element,index)=>
        {
          for(let key in element){
          if(key==='usersdata'){
            if(element.usersdata.username===action.value.username &&
              element.userdata.password===action.value.password)
          {
            console.log(action.value);
            element.page=action.value.loc;
            console.log('task success'+element.page);
          }}}
        })
        return rawdata3;
    default:
      return state;
  }


}
