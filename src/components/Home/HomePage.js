import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const nagivate = useNavigate();
  return (
    <div className="homepage-container">
      <video loop autoPlay muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          You don't want to make boring form. And your audience won't answer
          one. Create type form instead-and make everyone happy.
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button onClick={() => nagivate("/Users")}>
              Get's started. It's free
            </button>
          ) : (
            <button onClick={() => nagivate("/login")}>Doing Quiz Now</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
