import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ userData, setUserData }) => {
  useEffect(() => {
    console.log("asd");
  }, []);

  if (!userData.isAdded) {
    return (
      <div className='full-bg-block'>
        <div className='bashboard-container'>
          <ul className='menu-list'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className='full-bg-block'>
      {console.log(userData)}
      <div className='bashboard-container'>
        <div className='d-flex'>
          <div className='me'>FullName: </div>
          <div>{userData.data.full_name}</div>
        </div>
        <div className='d-flex'>
          <div className='me'>FullName: </div>
          <div>{userData.data.username}</div>
        </div>
        <div className='d-flex'>
          <div className='me'>country : </div>
          <div>{userData.data.country_row_id}</div>
        </div>
        <div className='d-flex'>
          <div className='me'>Email id : </div>
          <div>{userData.data.email_id}</div>
        </div>
        <div className='d-flex'>
          <div className='me'>Mobile number : </div>
          <div>{userData.data.mobile_number}</div>
        </div>
        <div className='d-flex'>
          <div className='me'>Referral id: </div>
          <div>{userData.data.referral_username}</div>
        </div>
        {/* {Object.entries(userData.data).map(([key, value], k) => (
          <div key={k} className='d-flex'>
            <div className='me'>{key} : </div>
            <div>{value}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default Dashboard;
