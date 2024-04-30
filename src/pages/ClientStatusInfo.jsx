import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import { useParams } from "react-router-dom";
import moment from "moment";

const ClientStatusInfo = () => {
  const { clientcode } = useParams();
  const [clientstatusinfo, setClientStatusInfo] = useState([]);

  useEffect(() => {
    getClientStatusInfo();
  }, [clientcode]);

  const getClientStatusInfo = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/clientstatusinfo/${clientcode}`
      );

      setClientStatusInfo(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="info__table">
        <h2 className="text-center fw-bold pt-3">
          Client Visa Status Information
        </h2>
        <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Name
                  </th>
                  <th scope="col" className="text-center">
                    Code
                  </th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                  <th scope="col" className="text-center">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientstatusinfo && clientstatusinfo.length > 0 ? (
                  clientstatusinfo?.map((info) => (
                    <tr key={info.id}>
                      <td className="text-center"> {info._name} </td>
                      <td className="text-center"> {info._code} </td>
                      <td
                        className={`${
                          info._status === "Apply"
                            ? "text-primary"
                            : info._status === "In Progress"
                            ? "text-info"
                            : info._status === "Done"
                            ? "text-success"
                            : info._status === "Reject"
                            ? "text-danger"
                            : ""
                        } fw-bold text-center`}
                      >
                        {info._status}
                      </td>
                      <td className="text-center">
                        {moment(info._date.split(" ")[0]).format("DD-MM-YYYY")}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="text-center p-4 empty col-lg-12">
                    <h2 className="fw-bold text-danger">User Doesn't Exist</h2>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientStatusInfo;
