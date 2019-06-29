export default class RestoService {
  constructor() {
    this._base = `http://localhost:3000/`;
  }

  getMenuItems = async () => {
    const res = await fetch(`${this._base}menu`)
    return res.json().then(data => data.map(item => console.log(item)))
  }
}