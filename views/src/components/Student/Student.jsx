import Axios from "axios"
import { useState, useEffect } from "react"

const Student = () => {
  const [donnee, setDonnee] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:7000/student")
      .then((res) => { setDonnee(res.data)})
      .catch(error => console.log("Error axios: "+ error.message))
  })
  return (
    <>
      <form className="mb-2" action="" method="post">
          <input type="search" name="search" id="search" placeholder="Search..." className="form-control" />
      </form>
      <ul className="list-group">
        {donnee.map((item) => {
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>{item.fullname}</span>
            <div>
              <div className="btn-group">
                <a href="#" className="btn btn-sm btn-info">Edit</a>
                <a href="#" className="btn btn-sm btn-danger">Delete</a>
              </div>
            </div>
          </li>
        })}
      </ul>
    </>
  )
}

export default Student