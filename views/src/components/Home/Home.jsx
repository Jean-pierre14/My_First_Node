import Student from "../Student/Student"

const Home = () => {
  return (
      <>
          <div className="container-fluid">
              <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-7 my-5">
                      <div className="card card-body text-center">
                        <h2 className="">My first Nodejs and ReactJs</h2>
                        <p>
                            Within this project, we gonna learn the <span className="btn btn-sm btn-primary">CRUD operators</span>
                        </p>
                      </div>
                  </div>
                  <div className="col-md-7 my-5">
                      <div className="card card-body">
                        <h3 className="text-center">Registration</h3>
                      <form action="" method="post">
                          <div className="form-group">
                              <label htmlFor="username">Username</label>
                              <input type="text" name="username" id="username" placeholder="Username" className="form-control" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">Fullname</label>
                              <input type="text" name="fullname" id="fullname" placeholder="Fullname" className="form-control" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="email" placeholder="Email@domain.com" className="form-control" />
                          </div>
                          <div className="my-2 row">
                              <div className="form-group col-md-6">
                                  <label htmlFor="password">Password</label>
                                  <input type="password" name="password" id="password" placeholder="Password" className="form-control" />
                              </div>
                              <div className="form-group col-md-6">
                                  <label htmlFor="cpassword">Confirm password</label>
                                  <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group">
                              <button type="submit" className="btn btn-primary">Register</button>
                          </div>
                      </form>
                      </div>
                  </div>
                  <div className="col-md-7 my-5">
                      <div className="card card-body">
                          <Student/>
                      </div>
                  </div>
              </div>
              </div>
        </div>
      </>
  )
}

export default Home