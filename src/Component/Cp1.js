import React, { useState, useEffect } from "react";
import axios from "axios";
const Cp1 = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const result = await axios.get("http://localhost:3007/Users");
    setUsers(result.data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="text-center">
      <h2>List of GitHub Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElm) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={curElm.id}>
                <div class="card bg-warning">
                  <img src={curElm.avatar_url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{curElm.login}</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                {/* <div class="card-deck">
                <div className="card p-2">
                  <dir className="d-flex align-items-center">
                    <div className="image"><img src={curElm.avatar_url} alt="..." className="rounded" width="155" /></div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{curElm.login}</h4><span className="textLeft">{curElm.url.name}</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column"><span>Article</span><span>38</span></div>
                        <div className="d-flex flex-column"><span>Article</span><span>38</span></div>
                        <div className="d-flex flex-column"><span>Article</span><span>38</span></div>
                      </div>
                    </div>
                  </dir>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cp1;
